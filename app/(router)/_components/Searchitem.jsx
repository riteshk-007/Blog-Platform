import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Searchitem = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery !== "" && searchQuery.length > 2) {
      router.push(`/search?q=${searchQuery}`);
    }
    setSearchQuery("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2  p-2 rounded-md md:w-full"
    >
      <Search className="h-5 w-5" />
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="border-none bg-transparent outline-none w-full"
      />
    </form>
  );
};

export default Searchitem;
