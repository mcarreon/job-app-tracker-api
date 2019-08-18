import bodyParser from 'body-parser';

export const handleBodyRequestParsing = (router) => {
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended : false }));
};