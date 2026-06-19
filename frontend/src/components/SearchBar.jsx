import { useState } from "react"

export default function SearchBar({
  data = [],
  onSearch,
}) {
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)

    const filtered = data.filter((item) =>
      item.name
        ?.toLowerCase()
        .includes(value.toLowerCase())
    )

    onSearch(filtered)
  }

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className="w-full p-4 rounded-xl bg-gray-900 text-white border border-gray-700 outline-none"
      />
    </div>
  )
}