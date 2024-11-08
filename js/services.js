base_url = "https://gestor-it.com/easy_bot/services/public/index.php/"

//async function get_user(user,pass){
//    url = base_url + user + "/" + pass;
//    fetch(url)
//        .then(response => {
//            if (!response.ok) {
//                throw new Error('Network response was not ok');
//            }
//            return response.json();
//        })
//        .then(data => {
//            console.log(data);
//            return data;
//        })
//        .catch(error => {
//            console.error('Error:', error);
//        });
//
//}

async function get_user(user, pass){
    url = base_url + user + "/" + pass;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}