import { Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { documents } from './database/tables/documents';
import cuid from 'cuid';

const queryClient = postgres(process.env.DATABASE_URL || '');

export const db = drizzle(queryClient);

@Injectable()
export class AppService {
  async createDocument(
    name: string,
    type: string,
    source: string,
    s3Key: string,
  ) {
    const id = cuid();
    return db
      .insert(documents)
      .values({
        id,
        name,
        type,
        source,
        s3Key,
      })
      .returning();
  }
}
