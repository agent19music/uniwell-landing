import { NextRequest, NextResponse } from 'next/server';
import { Autosend } from 'autosendjs';

const autosend = new Autosend(process.env.AUTOSEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const result = await autosend.emails.send({
      from: { email: 'hello@uzskicorp.agency', name: 'Uniwell' },
      to: { email },
      subject: "You're on the Uniwell waitlist!",
      templateId: 'A-9eb923832fa034bce502',
      dynamicData: { email },
    });

    console.log('AutoSend response:', JSON.stringify(result, null, 2));

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('AutoSend error:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    );
  }
}
