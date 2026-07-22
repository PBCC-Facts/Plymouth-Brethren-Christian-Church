-- Contact intake: contact is now required, plus a follow-up consent flag.
-- A submitter stays anonymous by giving a Proton/Tutanota email or a Signal
-- number that is not tied to their name, rather than by giving nothing: the
-- editor needs a way to follow up and to honour removal requests.

-- Whether the submitter consents to the editor reaching out with follow-up
-- questions. Contact is held regardless (for verification + removal); this
-- governs proactive outreach only.
alter table public.submissions
  add column if not exists follow_up_ok boolean not null default false;

-- Contact is required going forward. Existing rows (none in production) are
-- left as-is; the check only applies to new/updated rows.
alter table public.submissions
  drop constraint if exists submissions_contact_present;
alter table public.submissions
  add constraint submissions_contact_present
  check (contact is not null and char_length(btrim(contact)) between 1 and 500)
  not valid;
