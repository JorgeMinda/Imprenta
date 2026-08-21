import { JournalEntryDraft } from '../entities/JournalEntry';

export interface JournalRepository {
  save(draft: JournalEntryDraft): Promise<{ id: string }>;
}
