import { JournalEntryDraft } from '../../domain/entities/JournalEntry';
import { PostingService } from '../../domain/services/PostingService';
import { JournalRepository } from '../../domain/repositories/JournalRepository';

export class CreateJournalEntry {
  constructor(private readonly repository: JournalRepository) {}

  async execute(draft: JournalEntryDraft): Promise<{ id: string }> {
    PostingService.validateDoubleEntry(draft.lines);
    return this.repository.save(draft);
  }
}
