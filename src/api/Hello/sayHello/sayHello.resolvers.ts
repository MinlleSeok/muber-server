import { Greeting } from "src/types/graph";

const resolvers = {
    Query: {
        sayHello: (): Greeting => {// "Hey Hello how are you"
            return {
                text: "love you",
                error: false
            }
        }
    }
}

export default resolvers;