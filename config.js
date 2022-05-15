import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const APP_URL = publicRuntimeConfig.APP_URL;
