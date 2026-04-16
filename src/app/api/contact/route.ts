export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json(
                { success: false, error: "All fields are required" },
                { status: 400 }
            );
        }

        console.log("Contact Form:", { name, email, message });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json(
            { success: false, error: "Server error" },
            { status: 500 }
        );
    }
}

