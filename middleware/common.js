import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import passport from './passport';
import express from 'express';

export const handleBodyRequestParsing = (router) => {
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended : false }));
};

export const handleCookieParsing = (router) => {
  router.use(cookieParser());
};

export const handleExpressSession = (router) => {
  router.use(expressSession({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: false
  }));
};

export const handlePassport = (router) => {
  router.use(passport.initialize());
  router.use(passport.session());
};
