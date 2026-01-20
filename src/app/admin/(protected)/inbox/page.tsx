import MainContent from "@/components/admin/MainContent";
import prisma from "@/lib/prisma";

export default async function InboxPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <MainContent title="Inbox">
      <div className="flex flex-col gap-4">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">{message.name}</h3>
              <p className="text-sm text-gray-500">{message.email}</p>
            </div>
            <p className="text-sm text-gray-500">{message.message}</p>
          </div>
        ))}
      </div>
    </MainContent>
  );
}
