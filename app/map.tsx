import {StyleSheet, View} from "react-native";
import React from "react";
import {ExpoWebGLRenderingContext, GLView} from "expo-gl";



let optionsMapDataFile: BufferEncoding


/**
    Object that can set a value only once
 */
class SingleSetVar<T> {
    private _value: T | undefined;
    private _isSet: boolean = false;
    public setValue(newValue: T): boolean {
        if (!this._isSet) {
            this._value = newValue;
            this._isSet = true;
            return true;
        } else {
            console.log('Error: Value cant be set again');
            return false;
        }
    }
    public getValue(): T | undefined {
        return this._value;
    }
}

/**
    Uses Hashtables to find out what Element is next to be made in to an object
*/
type HashTable<T> = Map<string, T>;

interface OSMElement {
    id: string;
    sequence: number;  // To capture the order of completion
    // ... other fields
}
let osmHashTable: HashTable<OSMElement> = new Map<string, OSMElement>();

let sequence = 0;

function addElement(element: OSMElement) {
    element.sequence = sequence++;
    osmHashTable.set(element.id, element);
}

function findFirstCompletedElement(): OSMElement | null {
    let firstElement = null;

    for (let element of osmHashTable.values()) {
        if (firstElement === null || element.sequence < firstElement.sequence) {
            firstElement = element;
        }
    }

    return firstElement;
}


/*
    Returns a files data as one string
 */

/*
    Temp mini osm xml map data for testing (should be replaced by extrudeString function)

 */

// Normal formated xml map data
const dontUseMe: string = '<?xml version="1.0" encoding="UTF-8"?>\n' +
                          '<osm version="0.6" generator="CGImap 0.8.10 (575119 spike-08.openstreetmap.org)" copyright="OpenStreetMap and contributors" attribution="http://www.openstreetmap.org/copyright" license="http://opendatacommons.org/licenses/odbl/1-0/">\n' +
                          ' <bounds minlat="32.7050100" minlon="-96.9698200" maxlat="32.7089100" maxlon="-96.9625200"/>\n' +
                          '</osm>\n'

let tmpOSMData: string = '<?xml version="1.0" encoding="UTF-8"?> <osm version="0.6" generator="CGImap 0.8.10 (575119 spike-08.openstreetmap.org)" copyright="OpenStreetMap and contributors" attribution="http://www.openstreetmap.org/copyright" license="http://opendatacommons.org/licenses/odbl/1-0/">  <bounds minlat="32.7050100" minlon="-96.9698200" maxlat="32.7089100" maxlon="-96.9625200"/> </osm> '

class MapInfoStoreage {

}

class Node {
    openElements: Element[] | undefined
    closedElements: Element[] | undefined
    id: number | undefined
    lat: number | undefined
    lon: number | undefined
    tags: string[] | undefined

    constructor(id?: number, lat?: number, lon?: number, tags?: string[]) {


        if(typeof id == 'number') {
            this.id = id
        }
        else {
            console.log('error: an id\'s type want a number ')
        }
        if(typeof lat == 'number') {
            this.lat = lat
        } else {
            console.log('error: a nodes type wasnt a number')
        }
        if(typeof lon == 'number') {
            this.lon = lon
        } else {
            console.log('error: a nodes lon wasnt a number')
        }
        if(Array.isArray(tags)) {
            for(var i = 0; i < tags.length; ++i) {
                if(!(typeof tags[i] == 'string')) {
                    console.log('error: a nodes tags need to be an array of strings')
                    this.tags[i] = 'Invalid-Tag'
                }
                this.tags[i] = tags[i]
            }
        }

    }
}
let wayMap: Map<string, >
class Way {
    constructor() {
    }
}
class Relation {
    constructor() {
    }
}
class Tag {
    constructor() {
    }
}
interface MapDataTypes  {
    node: Node,
    way: Way,
    relation: Relation,
    tag, Tag
}
class MapDataTree {
    elements = Array()
    constructor() {
    }
    addEllements(element: any): boolean {

    }
}

function extrudeString(fileName: string): string {
    var parsedMapData: string = tmpOSMData
    return parsedMapData
}
class OSMParser {
    BaseWorkingXMLMapData: SingleSetVar<string> = new SingleSetVar<string>()

    constructor(xmlMapData?: string) {
        if(typeof xmlMapData == 'string') {
            this.setBaseWorkingXMLMapData(xmlMapData)
        }
        else {
            console.log('error: xmlMapData isn\'t of type string')
            this.setBaseWorkingXMLMapData('') // Initialize to empty string if xmlMapData is not a string
        }
    }
    setBaseWorkingXMLMapData(newValue: string): boolean {
        if(newValue.length > 0 && newValue.length != undefined) {
            this.BaseWorkingXMLMapData.setValue(newValue)
            return true
        }
        return false
    }
    getBaseWorkingXMLMapData(): string {
        return this.BaseWorkingXMLMapData.getValue() as 'string'
    }


    xmlToTree(xmlMapData: string): MapDataTree | null {
        if(typeof xmlMapData == undefined) {
            throw new Error('xmlMapData in xmlTree() is undfined')
            return null
        }
        let dataTree = new MapDataTree()

        for(var i: number = 0; i < xmlMapData.length; ++i) {

        }
        return dataTree// FixMe
    }
}

let parzer = new OSMParser()
parzer.setBaseWorkingXMLMapData(tmpOSMData)

const XMLStringToOSMParser = function(OSMData: string): boolean {
    if(parzer.setBaseWorkingXMLMapData(parzer.getBaseWorkingXMLMapData()) == true) {
        console.log('setBaseWorkingXMLMapData passed')
    }
    throw new Error('setBaseWorkingXMLMapData failed')
}
console.log('BaseWorkingXMLData string size is:: '+ parzer.BaseWorkingXMLMapData.getValue()?.length)
var mapDataStringXml = parzer.BaseWorkingXMLMapData.getValue()
if(typeof mapDataStringXml == 'string'){
    parzer.xmlToTree(mapDataStringXml)
}


export default function Map() {
    return (
        <View style={styles.container}>
            <GLView style={styles.map} onContextCreate={_OnGLContextCreate}>

            </GLView>
        </View>
    )
}
let _OnGLContextCreate = async (gl: ExpoWebGLRenderingContext) => {
    let shader = gl.createShader(gl.VERTEX_SHADER);
    if (shader === null) {
        console.error('Failed to create shader');
        return;
    }
    gl.shaderSource(shader, `
        void main() {
            gl_Position = vec4(1.0, 1.0, 1.0, 1.0);
        }
    `);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Failed to compile shader:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red'      // delete me
    }
})
