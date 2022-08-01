import { DatabaseType } from 'typeorm';
import { MSSQLRunner } from './mssql/mssql-runner';
import { PostgresRunner } from './postgres/postgres-runner';

export function runnerFactory(params: { type: DatabaseType }) {
  const { type } = params;
  if (type === 'mssql') {
    return new MSSQLRunner();
  } else if (type === 'postgres') {
    return new PostgresRunner();
  }
  throw new Error('Not support');
}
