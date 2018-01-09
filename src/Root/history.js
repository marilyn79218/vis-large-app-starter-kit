import createHistory from 'history/createHashHistory';
import qhistory from 'qhistory';
import { parse, stringify } from 'qs';

const history = qhistory(
  createHistory(),
  stringify,
  parse,
);

export default history;

