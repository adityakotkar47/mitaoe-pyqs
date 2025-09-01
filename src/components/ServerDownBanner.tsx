export default function ServerDownBanner() {
    return (
        <div className="bg-red-500/10 border-b border-red-500/20 px-4 py-3">
            <div className="flex items-center justify-center gap-2 text-center">
                <span className="text-red-400 text-sm font-medium">
                    ⚠️ College servers are temporarily down - Downloads will resume once they&apos;re back online
                </span>
            </div>
        </div>
    )
}
