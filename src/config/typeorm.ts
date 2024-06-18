import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: `${process.env.PGHOST}`,
  port: `${process.env.PGPORT}`,
  username: `${process.env.PGUSER}`,
  password: `${process.env.PGPASSWORD}`,
  database: `${process.env.PGDATABASE}`,
  extra: {
    ssl: 'true',
  },
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
