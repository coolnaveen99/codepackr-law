import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

export interface ContactSubmission {
  name?: string
  email: string
  category: string
  subject?: string
  message: string
}

export interface ContactSubmissionResult {
  success: boolean
  id?: string
  error?: string
}

export async function submitContactMessage(data: ContactSubmission): Promise<ContactSubmissionResult> {
  const email = data.email?.trim()
  const message = data.message?.trim()

  if (!email || !email.includes('@')) {
    return { success: false, error: 'Please provide a valid email address.' }
  }

  if (!message || message.length < 5) {
    return { success: false, error: 'Please write a message of at least 5 characters.' }
  }

  try {
    const docRef = await addDoc(collection(db, 'contact_messages'), {
      name: data.name?.trim() || '',
      email,
      category: data.category || 'Feedback & General',
      subject: data.subject?.trim() || '',
      message,
      createdAt: new Date().toISOString(),
      timestamp: serverTimestamp(),
      source: 'law.codepackr.com',
      status: 'unread',
    })
    return { success: true, id: docRef.id }
  } catch (err: unknown) {
    console.error('Contact submission error:', err)
    const errorMsg =
      err instanceof Error ? err.message : 'Unable to send message at this time. Please try again or email codepackr@gmail.com.'
    return { success: false, error: errorMsg }
  }
}
