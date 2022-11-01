import FireFly from "@hyperledger/firefly-sdk";

import { RPC_URL } from "../constants";

const firefly = new FireFly({ host: RPC_URL });

export default firefly;
