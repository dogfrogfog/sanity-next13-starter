import { createClient, groq } from "next-sanity";

import clientConfig from "@/sanity/config/client-config";

const sanityClient = createClient(clientConfig);
