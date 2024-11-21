import { pgTable, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const documents = pgTable('documents', {
  id: varchar('id', { length: 25 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  type: varchar('type', { length: 100 }).notNull(),
  source: varchar('source', { length: 255 }),
  s3Key: text('s3_key').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
