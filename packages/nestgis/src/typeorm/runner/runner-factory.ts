import { DatabaseType } from 'typeorm';
import { MSSQLRunner } from './mssql/mssql-runner';
import { PostgresRunner } from './postgres/postgres-runner';

export function runnerFactory(params: {
  type: DatabaseType;
  repo: Repository<any>;
}) {
  const { type } = params;
  if (type === 'mssql') {
    return new MSSQLRunner(repo);
  } else if (type === 'postgres') {
    return new PostgresRunner(repo);
  }
  throw new Error('Not support');
}
