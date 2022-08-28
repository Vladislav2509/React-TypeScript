function Hamburger() {
    return (
      <div className='body'>
        <div className='container1'>
          <div className='header'>
            <h1>Reset password</h1>
          </div>
  
          <div className='blok_one'>
            <div className='content'>
              
              <div className='block__white'>
                <div className='frame'>Frame 15</div>
  
                <div className='lists'>
                  <div className='icon__hamburger'></div>
                  <div className='username'>
                    <div className='user'></div>
                    <div className='wordUsername'>Username</div>
                  </div>
                </div>  
  
              </div>
  
              <div className='block__posts'>
                <div className='checkbox'></div>
                <div className='list'>
                  <div className='all_posts'>All posts</div>
                  <div className='my_posts'>My posts</div>
                  <div className='log_out'>Log out</div>
                  <div className='icon_logout'></div>
                </div>
                <div className='add_posts'>Add posts</div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
     
    );
  }
  
  export default Hamburger;