import { contacts, type InsertContact, type Contact } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
}

export class DatabaseStorage implements IStorage {
  private db: any;

  constructor() {
    // Lazy import to avoid crashing if DATABASE_URL is not set
    const { db } = require("./db");
    this.db = db;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await this.db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }
}

export class MemoryStorage implements IStorage {
  private contacts: Contact[] = [];
  private nextId = 1;

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contact: Contact = {
      id: this.nextId++,
      name: insertContact.name,
      email: insertContact.email,
      message: insertContact.message,
      createdAt: new Date(),
    };
    this.contacts.push(contact);
    console.log("[MemoryStorage] Contact saved:", contact);
    return contact;
  }
}

// Use in-memory storage if DATABASE_URL is not set
export const storage: IStorage = process.env.DATABASE_URL
  ? new DatabaseStorage()
  : new MemoryStorage();
