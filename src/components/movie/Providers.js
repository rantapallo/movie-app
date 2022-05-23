const Providers = ({providers}) => {
  return (
    <div className="providers">
      <h1>Providers</h1>
      <div className="providers-wrap">
        {(providers.results.hasOwnProperty('FI')) && (providers.results.FI.hasOwnProperty('flatrate')) ?
        providers.results.FI.flatrate.map((provider) => (
          <div className="providers-card" key={provider.provider_id}>
            <div className="providers-image">
              {provider.logo_path !== null ? 
                <img 
                  className="details-img"
                  alt="not available"
                  src={`https://www.themoviedb.org/t/p/w138_and_h175_face${provider.logo_path}`}
                />
              : 'not available'}
            </div>
            <div className="providers-name">{provider.provider_name}</div>
          </div>
        ))
      : ''
      }
    </div>
    </div>
   );
}
 
export default Providers;