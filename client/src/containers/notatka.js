.dropdown-menu {
    /* border: 2px solid green; */
    display: none;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 150px;
    z-index: 30;
    top: 50px;
    right: 10px;
    border: 8px solid none;

    -webkit-box-shadow: 0px 0px 47px -28px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 47px -28px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 47px -28px rgba(0, 0, 0, 0.75);
}

.dropdown-menu a:hover {
    background-color: #8cc63e;
    color: white;
}

.dropdown-menu a {
    text-decoration: none;
    width: 100%;
    height: 50px;
    display: flex;
    /* border: 2px solid pink; */
    justify-content: center;
    align-items: center;
    /* border-bottom: 1px solid whitesmoke; */
    color: black;
}

.pureflex:hover .dropdown-menu {
    display: flex;
}

.pureflex:hover .arrcontainer {
    background-color: transparent;
}

.pureflex {
    display: flex;
    /* border: 2px solid yellow; */
    position: relative;
    /* width: 100%; */
    height: 100%;
}



<div className="dropdown-menu">
    <a
        href="#"
        onClick={e => this.logOut(e)}
    >
        Logout
    </a>
    <a href="#">Shop</a>
    <a href="#">Charity</a>
    <a href="#">Edit profile</a>
    <a href="#"> Pictures</a>
</div>
