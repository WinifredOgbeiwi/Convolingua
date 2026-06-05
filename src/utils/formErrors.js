/** Map thrown/API errors to messages safe to show visitors. */
export function getContactFormError(err) {
  const msg = String(err?.message ?? '').toLowerCase()

  if (msg.includes('email')) {
    return 'Please enter a valid email address.'
  }

  return 'We could not send your message right now. Please try again or email us directly.'
}
