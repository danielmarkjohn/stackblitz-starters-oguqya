const restaurants = [
  {
    name: 'Cafe Bean House',
    location: 'New Town Road',
    imageUrl:
      'https://images.unsplash.com/photo-1529676468696-f3a47aba7d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
  },
  {
    name: 'Rivarno',
    location: 'Cleveland Town',
    imageUrl:
      'https://images.unsplash.com/photo-1615322958568-7928d3291f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80',
  },
  {
    name: 'Corner Cafe Plaza',
    location: 'Golf Club Road',
    imageUrl:
      'https://images.unsplash.com/photo-1601205741712-b261aff33a7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80',
  },
  {
    name: 'Daily Bean',
    location: 'Downtown',
    imageUrl:
      'https://images.unsplash.com/photo-1534201569625-ed4662d8be97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2511&q=80',
  }
]

const Restaurants = () => {
  return (

    <>
      <ul role="list">
        {restaurants.map((resto) => (
          <li key={resto.location} className="flex py-3">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50 resto-image" src={resto.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-black-600">{resto.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-black-300">{resto.location}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Restaurants;
