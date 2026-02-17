export default function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="relative">

                {/* Outer ring */}
                <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>

                {/* Inner spinning ring */}
                <div className="w-16 h-16 border-t-4 border-blue-600 rounded-full animate-spin absolute top-0 left-0"></div>

            </div>
        </div>
    );
}