
export class Account {
    public static user: Account

    private loginID: number | undefined;
    private username: string | undefined;
    private userType: string | undefined
    private geofence: string | undefined

    constructor(loginID: number | undefined, username: string | undefined, role: string | undefined, geofence?: string | undefined) {
        this.setLoginID(loginID);
        this.setUsername(username);
        this.setUserRole(role);
        if(geofence != undefined) {
            this.setGeofence(geofence);
        }
        else {
            this.setGeofence('none')
        }
    }
    setLoginID(loginID: number | undefined): void {
        if(typeof loginID !== 'undefined') {
            this.loginID = -1
            console.error('Invalid loginID:', loginID);
        }
        this.loginID = loginID;
        console.log('LoginID set to:', this.loginID);
    }
    setUsername(username: string | undefined): void {
        if(typeof username === 'undefined') {
            this.username = 'undefined';
            console.error('username is undefined:');
        }
        //Fixme: Check for valid username
        this.username = username;
        console.log('Username set to:', this.username);
    }
    setUserRole(userRole: string | undefined): void {

        if(userRole == 'admin' || userRole == 'student' || userRole == 'firstresponder' || userRole == 'dispatch') {
            this.userType = userRole;
        }
        else {
            throw new Error('Invalid userRole');
        }
        console.log('UserType set to:', this.userType)
    }
    setGeofence(geofence: string): void {
        this.geofence = geofence;
        console.log('Geofence set to:', this.geofence);
    }
}