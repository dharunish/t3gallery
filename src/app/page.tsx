import Link from "next/link";
const mockUrls = [
  "https://5eq6ebt315.ufs.sh/f/O6wlpeW9JVEj2PvXvKwEZDtyYphe8Vsak6u4bPrOfGwUvSMd",
  "https://5eq6ebt315.ufs.sh/f/O6wlpeW9JVEj2RcFlAwEZDtyYphe8Vsak6u4bPrOfGwUvSMd",
  "https://5eq6ebt315.ufs.sh/f/O6wlpeW9JVEjQNeaQWtdtvC7DhixRV1c05nbO8ymAwJMaLSr",
  "https://5eq6ebt315.ufs.sh/f/O6wlpeW9JVEjncRrHopwe08kblW3NVKPnXzQIsDFaLrjHZS5",
  "https://5eq6ebt315.ufs.sh/f/O6wlpeW9JVEjn7mIuLpwe08kblW3NVKPnXzQIsDFaLrjHZS5"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url
}))
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4"> {
        mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))
      
        }


      </div>
    </main>
  );
}
