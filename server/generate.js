var database = {
    users: [],
  };
  
  
  database.users.push({
    id: "1",
    username: "admin",
    email: "admin@admin.com",
    isadmin: true,
    lastconnect: null,
  });
  
  database.users.push({
    id: "2",
    username: "user",
    email: "user@user.com",
    isadmin: false,
    astconnect: null,
  });
  
  console.log(JSON.stringify(database));