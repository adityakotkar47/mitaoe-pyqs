import { NextResponse } from 'next/server';

export async function GET() {
  // Downloads disabled - college servers under maintenance
  return NextResponse.json(
    { error: 'Downloads temporarily unavailable - College servers under maintenance' }, 
    { status: 503 }
  );
}