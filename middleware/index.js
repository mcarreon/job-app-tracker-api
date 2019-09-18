import {
  handleBodyRequestParsing, 
  handleCookieParsing,
  handleExpressSession,
  handlePassport,
} from "./common";

export default [handleBodyRequestParsing, handleExpressSession, handlePassport];