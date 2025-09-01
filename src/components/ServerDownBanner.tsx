export default function ServerDownBanner() {
    return (
        <div className="bg-red-50 dark:bg-red-500/10 border-b border-red-200 dark:border-red-500/20 px-4 py-3">
            <div className="flex items-center justify-center gap-2 text-center">
                <span className="text-red-600 dark:text-red-400 text-sm font-medium">
                    ⚠️ Downloads temporarily unavailable - College servers under maintenance
                </span>
            </div>
        </div>
    )
}
