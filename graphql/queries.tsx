import Authenticator from '../app/authenticator'
import { USER_CREDENTIALS } from "@aws-amplify/datastore/src/sync/processors/subscription";
import { generateClient } from "@aws-amplify/api";
import {Amplify} from "aws-amplify";
import {config} from "rxjs";

Amplify.configure(config);
const client = generateClient()