function LoadingScreen() {
  return (
    <div>
      <p>We are taking snapshots... 🛰️ </p>
      <div className="py-4 rounded shadow-md animate-pulse">
	      <div className="flex p-4 space-x-4">
		      <div className="flex-shrink-0 w-16 h-16 rounded-full"></div>
		      <div className="flex-1 py-2 space-y-4">
			      <div className="w-full h-3 rounded"></div>
			      <div className="w-5/6 h-3 rounded"></div>
		      </div>
	      </div>
        <div className="h-48 rounded-t dark:bg-coolGray-700"></div>
	      <div className="p-4 space-y-4 sm:px-8">
		      <div className="w-full h-4 rounded"></div>
		      <div className="w-full h-4 rounded"></div>
		      <div className="w-3/4 h-4 rounded"></div>
	      </div>
      </div>
    </div>
  )
}

export default LoadingScreen;