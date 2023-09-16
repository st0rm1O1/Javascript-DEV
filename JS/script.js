const HttpMethod = {
    GET: `GET`,
    POST: `POST`,
    PATCH: `PATCH`,
    DELETE: `DELETE`
};

const BASE_URL = {
    LOCAL: `http://localhost:1001`,
    ROUTER: `http://sprk.ddns.net:8888`,
    NGROK: `https://mollusk-heroic-jaguar.ngrok-free.app`,
    AWS: `https://sprk.swapnilkhedekar.com`
}

const TOKEN = {
    Admin: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXB0IjoxNjkzNzM3NjU1MTM4LCJpYXQiOjE2OTM4OTk4NDEsImV4cCI6MTY5Mzk4NjI0MX0.aNO0SIOj8Fibp72dsvN3uMAxFbeIOQX8GMqcsWYNTiDZT7uEIq7eHuWAef0FrRtVZbvnD15i-vID_PXShdtpIw`,
    Sales: `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwidXB0IjoxNjg3MDA0OTE2NzgyLCJpYXQiOjE2OTM3NTA5NTMsImV4cCI6MTY5MzgzNzM1M30.VPmklR8wkqpTy0HBRUaCrkCnhFUbND3GcB1G4PwwCKurFOZSTC8lrmSYv-9ShgXVEeVxV1-TlX68pZmXUDvFTg`
}

const CURRENT_BASE_URL = BASE_URL.NGROK;
const CURRENT_USER_TOKEN = TOKEN.Admin;


// const getData = async () => {
//     const register_test = {
//         "firstname": "Alien",
//         "middlename": "Foo",
//         "lastname": "Foo",
//         "username": "alien",
//         "email": "alien@gmail.com",
//         "password": "alien@123"
//     };

//     const login_test = {
//         "usernameOrEmail": "alien",
//         "password": "alien@123"
//     };

//     const discard_enquiries_test = {
//         "enquiry_id": [1, 12, 55],
//         "discard_reason": "OOYE"
//     }

//     const add_student_test = {
//         "enquiry_id": 5
//     }

//     // axios.get(LOCAL_BASE_URL + 'api/student/',
//     // {
//     //     headers: {
//     //         'ngrok-skip-browser-warning': true,
//     //         'Content-Type': 'application/json',
//     //         'Authorization': 'Bearer ' + ADMIN_TOKEN
//     //     }
//     // })
//     // .then(response => {
//     //     console.log("DATA - ", response.data);
//     // })
//     // .catch(error => {
//     //     console.log("ERROR - ", error);
//     // });

//     fetch(NGROK_BASE_URL + '/api/auth/profile', {
//             method: HttpMethod[0],
//             headers: {
//                 'ngrok-skip-browser-warning': true,
//                 'Content-Type': 'image/jpeg',
//                 'Authorization': 'Bearer ' + ADMIN_TOKEN
//             }
//         })
//     .then(response => response.json())
//     .then(data => {
//         console.log("DATA - ", data)
//     })
//     .catch((err) => {
//         console.log("ERROR - ", err)
//     });

// };

// function generateQRCode(url) {
//     var qrcode = new QRCode(document.getElementById("qrCodeContainer"), {
//       width: 500,
//       height: 500
//     });
//     qrcode.makeCode(url);
// };
  

// document.getElementById("generateQRBTN").addEventListener("click", function() {
//     var link = PROD_BASE_URL + "api/auth/+";
//     var headers = {
//         'Authorization': ('Bearer ' + ADMIN_TOKEN),
//         'Content-Type': 'application/json'
//     };
//     var queryString = Object.keys(headers).map(key => key + '=' + encodeURIComponent(headers[key])).join('&');
//     var linkWithHeaders = link + '?' + queryString;

//     console.log(linkWithHeaders);
//     generateQRCode(linkWithHeaders);
// });


/*
function calculateUniqueCourseFeesWithDiscount(jsonData, courseGroupIds, paymentType, isDiscountedValue) {
    const uniqueCourseIds = new Set();
    let totalFeesSum = 0;
    let discount = 0;
  
    // Helper function to check if a course ID is unique
    function isUnique(courseId) {
      return !uniqueCourseIds.has(courseId);
    }
  
    // Iterate through the JSON data for the specified course groups
    jsonData.forEach(courseGroup => {
      const courseGroupId = courseGroup.course_group_id;
  
      // Check if the course group ID is in the specified array
      if (courseGroupIds.includes(courseGroupId)) {
        const courses = courseGroup.courses;

        // Get the appropriate discount based on paymentType
        if (paymentType === 'LUMPSUM') {
            discount = courseGroup.course_group_lump_discount;
        } else if (paymentType === 'INSTALLMENT') {
            discount = courseGroup.course_group_inst_discount;
        } else {
            throw new Error('Invalid payment type. Use "LUMPSUM" or "INSTALLMENT".');
        }
    
        // Iterate through the courses in each group
        courses.forEach(course => {
          const courseId = course.course_id;
          const courseFees = course.course_fees;
  
          // Check if the course ID is not already in the uniqueCourseIds Set
          if (isUnique(courseId)) {
            totalFeesSum += courseFees;
            uniqueCourseIds.add(courseId); // Add the course ID to the Set
          }
        });
      }
    });
  
    // Apply discount to the total fees sum
    function applyDiscountToTotal(totalFees, discount) {
      return totalFees * (discount / 100);
    }
  
    return (isDiscountedValue 
                ? totalFeesSum - applyDiscountToTotal(totalFeesSum, discount) 
                : totalFeesSum
    );

}
const jsonData = [
    {
        "course_group_id": 1,
        "course_group_name": "Registration",
        "course_group_inst_fees": 5000.00,
        "course_group_inst_discount": 0.0,
        "course_group_lump_fees": 5000.00,
        "course_group_lump_discount": 0.0,
        "course_group_duration": 0.0,
        "courses": [
            {
                "course_id": 1,
                "course_name": "Registration",
                "course_fees": 5000.00,
                "course_duration": 0.0
            }
        ]
    },
    {
        "course_group_id": 2,
        "course_group_name": "MEAN",
        "course_group_inst_fees": 57000.00,
        "course_group_inst_discount": 40.0,
        "course_group_lump_fees": 51300.00,
        "course_group_lump_discount": 46.0,
        "course_group_duration": 110.0,
        "courses": [
            {
                "course_id": 14,
                "course_name": "Bootstrap",
                "course_fees": 2000.00,
                "course_duration": 10.0
            },
            {
                "course_id": 12,
                "course_name": "HTML5",
                "course_fees": 3000.00,
                "course_duration": 10.0
            },
            {
                "course_id": 41,
                "course_name": "Introduction to Data Structure",
                "course_fees": 1300.00,
                "course_duration": 10.0
            },
            {
                "course_id": 10,
                "course_name": "C Programming",
                "course_fees": 7800.00,
                "course_duration": 10.0
            },
            {
                "course_id": 13,
                "course_name": "CSS3",
                "course_fees": 7700.00,
                "course_duration": 10.0
            },
            {
                "course_id": 46,
                "course_name": "NodeJS",
                "course_fees": 14700.00,
                "course_duration": 10.0
            },
            {
                "course_id": 11,
                "course_name": "C++ Programming",
                "course_fees": 7800.00,
                "course_duration": 10.0
            },
            {
                "course_id": 45,
                "course_name": "ExpressJS",
                "course_fees": 10000.00,
                "course_duration": 10.0
            },
            {
                "course_id": 44,
                "course_name": "MongoDB",
                "course_fees": 12700.00,
                "course_duration": 10.0
            },
            {
                "course_id": 33,
                "course_name": "AngularJS",
                "course_fees": 18000.00,
                "course_duration": 10.0
            },
            {
                "course_id": 15,
                "course_name": "Javascript",
                "course_fees": 10000.00,
                "course_duration": 10.0
            }
        ]
    },
    {
        "course_group_id": 3,
        "course_group_name": "MERN",
        "course_group_inst_fees": 57000.00,
        "course_group_inst_discount": 40.0,
        "course_group_lump_fees": 51300.00,
        "course_group_lump_discount": 46.0,
        "course_group_duration": 110.0,
        "courses": [
            {
                "course_id": 14,
                "course_name": "Bootstrap",
                "course_fees": 2000.00,
                "course_duration": 10.0
            },
            {
                "course_id": 12,
                "course_name": "HTML5",
                "course_fees": 3000.00,
                "course_duration": 10.0
            },
            {
                "course_id": 41,
                "course_name": "Introduction to Data Structure",
                "course_fees": 1300.00,
                "course_duration": 10.0
            },
            {
                "course_id": 10,
                "course_name": "C Programming",
                "course_fees": 7800.00,
                "course_duration": 10.0
            },
            {
                "course_id": 13,
                "course_name": "CSS3",
                "course_fees": 7700.00,
                "course_duration": 10.0
            },
            {
                "course_id": 46,
                "course_name": "NodeJS",
                "course_fees": 14700.00,
                "course_duration": 10.0
            },
            {
                "course_id": 34,
                "course_name": "ReactJS",
                "course_fees": 18000.00,
                "course_duration": 10.0
            },
            {
                "course_id": 11,
                "course_name": "C++ Programming",
                "course_fees": 7800.00,
                "course_duration": 10.0
            },
            {
                "course_id": 45,
                "course_name": "ExpressJS",
                "course_fees": 10000.00,
                "course_duration": 10.0
            },
            {
                "course_id": 44,
                "course_name": "MongoDB",
                "course_fees": 12700.00,
                "course_duration": 10.0
            },
            {
                "course_id": 15,
                "course_name": "Javascript",
                "course_fees": 10000.00,
                "course_duration": 10.0
            }
        ]
    }
];

const courseGroupIds = [2, 3]; // Specify the course_group_ids you want to calculate fees for
const paymentType = 'INSTALLMENT'; // Specify payment type: 'LUMPSUM' or 'INSTALLMENT'

const result = calculateUniqueCourseFeesWithDiscount(jsonData, courseGroupIds, paymentType, true);
console.log(result); // This will print the total discounted course fees for unique courses based on payment type
*/


function getProfilePicture() {

    fetch(CURRENT_BASE_URL + '/api/auth/profile', {
        method: HttpMethod.GET,
        headers: {
            'ngrok-skip-browser-warning': true,
            'Content-Type': 'image/jpeg',
            'Authorization': 'Bearer ' + CURRENT_USER_TOKEN
        }
    })
    .then(response => {
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json'))
            return response.json();
        
        else return response.blob();
    })
    .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        const imageElement = document.getElementById('profil_picture');
        imageElement.src = imageUrl;
    })
    .then((data) => {
        console.log("DATA - ", data);
    })
    .catch((err) => {
        console.log("ERROR - ", err);
    });

}



function setProfilePicture() {

    const formData = new FormData();
    formData.append('image', document.getElementById('imageInput').files[0]);

    fetch(CURRENT_BASE_URL + '/api/auth/upload', {
        method: HttpMethod.POST,
        headers: {
            'ngrok-skip-browser-warning': true,
            'Authorization': 'Bearer ' + CURRENT_USER_TOKEN
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("DATA - ", data)
        getProfilePicture();
    })
    .catch((err) => {
        console.log("ERROR - ", err)
    });

}



// getData();
getProfilePicture();


