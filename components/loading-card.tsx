export default function LoadingCard() {
  return (
    <section className="rounded shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] text-gray-700">
      <div className="px-10 py-4 border-b">
        <div className="bg-slate-100 animate-pulse h-[28px] w-[300px] rounded"></div>
        {/* <h4 className="text-lg font-semibold">Industries</h4> */}
      </div>
      <div className="px-10 pt-6 pb-10">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden">
          {Array(12)
            .fill("")
            .map((industry) => {
              return (
                <li
                  key={industry}
                  className="bg-slate-100 animate-pulse h-[24px] w-[200px] rounded"
                ></li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
