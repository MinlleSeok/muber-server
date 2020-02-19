import { SayHelloQueryArgs, SayHelloResponse } from "src/types/graph";

const resolvers = {
    Query: {
        sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {// "Hey Hello how are you"
            return {
                text: `Hello ${args.name}`,
                error: false
            }
        }
    }
}

export default resolvers;