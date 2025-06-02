"use client"
import { createPost } from "./actions/postActions";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <button
        onClick={() => router.push("/client-test-endpoint")}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Go to Client Test
      </button>

      <button
        onClick={() => router.push("/server-test-endpoint")}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Go to Server Test
      </button>
      <form action={createPost}>
        <input name="title" />
        <textarea name="content" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
