const EMPLOYEES = [
  {
    "employee_id": 1,
    "first_name": "Emily",
    "last_name": "Smith",
    "department": "IT",
    "salary": 100000,
    "hire_date": "2021-09-30"
  },
  {
    "employee_id": 2,
    "first_name": "Robert",
    "last_name": "Pillai",
    "department": "HR",
    "salary": 56000,
    "hire_date": "2025-02-11"
  },
  {
    "employee_id": 3,
    "first_name": "Aisha",
    "last_name": "King",
    "department": "Marketing",
    "salary": 62000,
    "hire_date": "2019-05-03"
  },
  {
    "employee_id": 4,
    "first_name": "Olivia",
    "last_name": "Thompson",
    "department": "Marketing",
    "salary": 92000,
    "hire_date": "2019-04-19"
  },
  {
    "employee_id": 5,
    "first_name": "Chris",
    "last_name": "Rao",
    "department": "Design",
    "salary": 101000,
    "hire_date": "2025-02-10"
  },
  {
    "employee_id": 6,
    "first_name": "Kevin",
    "last_name": "Wright",
    "department": "Support",
    "salary": 82000,
    "hire_date": "2022-02-13"
  },
  {
    "employee_id": 7,
    "first_name": "Ravi",
    "last_name": "Jackson",
    "department": "Engineering",
    "salary": 134000,
    "hire_date": "2022-10-25"
  },
  {
    "employee_id": 8,
    "first_name": "Laura",
    "last_name": "Martin",
    "department": "Finance",
    "salary": 113000,
    "hire_date": "2020-02-23"
  },
  {
    "employee_id": 9,
    "first_name": "Noah",
    "last_name": "Wilson",
    "department": "Marketing",
    "salary": 82000,
    "hire_date": "2022-11-09"
  },
  {
    "employee_id": 10,
    "first_name": "Brian",
    "last_name": "Johnson",
    "department": "QA",
    "salary": 101000,
    "hire_date": "2024-02-25"
  },
  {
    "employee_id": 11,
    "first_name": "Emily",
    "last_name": "Allen",
    "department": "Design",
    "salary": 65000,
    "hire_date": "2025-03-11"
  },
  {
    "employee_id": 12,
    "first_name": "Raj",
    "last_name": "Yadav",
    "department": "Finance",
    "salary": 116000,
    "hire_date": "2025-06-22"
  },
  {
    "employee_id": 13,
    "first_name": "Nisha",
    "last_name": "Brown",
    "department": "HR",
    "salary": 52000,
    "hire_date": "2021-07-22"
  },
  {
    "employee_id": 14,
    "first_name": "Lisa",
    "last_name": "Thompson",
    "department": "Finance",
    "salary": 82000,
    "hire_date": "2023-04-06"
  },
  {
    "employee_id": 15,
    "first_name": "Harper",
    "last_name": "Chowdhury",
    "department": "Finance",
    "salary": 116000,
    "hire_date": "2020-10-28"
  },
  {
    "employee_id": 16,
    "first_name": "Jacob",
    "last_name": "Martin",
    "department": "Operations",
    "salary": 97000,
    "hire_date": "2021-12-29"
  },
  {
    "employee_id": 17,
    "first_name": "Kavya",
    "last_name": "Bose",
    "department": "Data",
    "salary": 99000,
    "hire_date": "2020-12-01"
  },
  {
    "employee_id": 18,
    "first_name": "Kiran",
    "last_name": "Garcia",
    "department": "Design",
    "salary": 70000,
    "hire_date": "2024-03-08"
  },
  {
    "employee_id": 19,
    "first_name": "Emma",
    "last_name": "Chowdhury",
    "department": "Support",
    "salary": 80000,
    "hire_date": "2021-06-18"
  },
  {
    "employee_id": 20,
    "first_name": "Ethan",
    "last_name": "Singh",
    "department": "IT",
    "salary": 72000,
    "hire_date": "2021-07-27"
  },
  {
    "employee_id": 21,
    "first_name": "Ethan",
    "last_name": "Young",
    "department": "Engineering",
    "salary": 114000,
    "hire_date": "2019-09-29"
  },
  {
    "employee_id": 22,
    "first_name": "Karan",
    "last_name": "Rao",
    "department": "HR",
    "salary": 70000,
    "hire_date": "2021-05-20"
  },
  {
    "employee_id": 23,
    "first_name": "Priya",
    "last_name": "Young",
    "department": "IT",
    "salary": 123000,
    "hire_date": "2020-08-08"
  },
  {
    "employee_id": 24,
    "first_name": "Robert",
    "last_name": "Garcia",
    "department": "Finance",
    "salary": 141000,
    "hire_date": "2025-01-16"
  },
  {
    "employee_id": 25,
    "first_name": "Meera",
    "last_name": "Naidu",
    "department": "Finance",
    "salary": 124000,
    "hire_date": "2025-07-18"
  },
  {
    "employee_id": 26,
    "first_name": "Mia",
    "last_name": "Thompson",
    "department": "Support",
    "salary": 53000,
    "hire_date": "2024-09-18"
  },
  {
    "employee_id": 27,
    "first_name": "Lisa",
    "last_name": "Chauhan",
    "department": "Product",
    "salary": 86000,
    "hire_date": "2020-03-25"
  },
  {
    "employee_id": 28,
    "first_name": "Raj",
    "last_name": "Jackson",
    "department": "Sales",
    "salary": 114000,
    "hire_date": "2019-09-18"
  },
  {
    "employee_id": 29,
    "first_name": "Noah",
    "last_name": "Nair",
    "department": "Support",
    "salary": 74000,
    "hire_date": "2024-12-07"
  },
  {
    "employee_id": 30,
    "first_name": "Neha",
    "last_name": "Doe",
    "department": "Finance",
    "salary": 84000,
    "hire_date": "2025-01-08"
  },
  {
    "employee_id": 31,
    "first_name": "Tanvi",
    "last_name": "Bose",
    "department": "Finance",
    "salary": 113000,
    "hire_date": "2020-04-01"
  },
  {
    "employee_id": 32,
    "first_name": "Amelia",
    "last_name": "Jackson",
    "department": "Finance",
    "salary": 128000,
    "hire_date": "2019-01-14"
  },
  {
    "employee_id": 33,
    "first_name": "Kiran",
    "last_name": "Martinez",
    "department": "Data",
    "salary": 154000,
    "hire_date": "2021-01-01"
  },
  {
    "employee_id": 34,
    "first_name": "Tom",
    "last_name": "Chowdhury",
    "department": "Design",
    "salary": 79000,
    "hire_date": "2024-09-10"
  },
  {
    "employee_id": 35,
    "first_name": "Chris",
    "last_name": "Thomas",
    "department": "QA",
    "salary": 78000,
    "hire_date": "2020-10-23"
  },
  {
    "employee_id": 36,
    "first_name": "Tanvi",
    "last_name": "Gupta",
    "department": "Design",
    "salary": 118000,
    "hire_date": "2019-01-03"
  },
  {
    "employee_id": 37,
    "first_name": "Ethan",
    "last_name": "Reddy",
    "department": "QA",
    "salary": 56000,
    "hire_date": "2020-04-03"
  },
  {
    "employee_id": 38,
    "first_name": "Ava",
    "last_name": "Garcia",
    "department": "Operations",
    "salary": 58000,
    "hire_date": "2021-09-13"
  },
  {
    "employee_id": 39,
    "first_name": "Lisa",
    "last_name": "Davis",
    "department": "QA",
    "salary": 101000,
    "hire_date": "2024-06-13"
  },
  {
    "employee_id": 40,
    "first_name": "Ravi",
    "last_name": "Patel",
    "department": "Marketing",
    "salary": 109000,
    "hire_date": "2020-05-30"
  },
  {
    "employee_id": 41,
    "first_name": "Anil",
    "last_name": "Kumar",
    "department": "Sales",
    "salary": 130000,
    "hire_date": "2020-11-07"
  },
  {
    "employee_id": 42,
    "first_name": "Anita",
    "last_name": "Nair",
    "department": "Finance",
    "salary": 124000,
    "hire_date": "2021-05-17"
  },
  {
    "employee_id": 43,
    "first_name": "Ravi",
    "last_name": "Shetty",
    "department": "Design",
    "salary": 104000,
    "hire_date": "2021-04-03"
  },
  {
    "employee_id": 44,
    "first_name": "Ava",
    "last_name": "Young",
    "department": "Data",
    "salary": 137000,
    "hire_date": "2023-11-30"
  },
  {
    "employee_id": 45,
    "first_name": "Mason",
    "last_name": "Taylor",
    "department": "Design",
    "salary": 75000,
    "hire_date": "2021-07-09"
  },
  {
    "employee_id": 46,
    "first_name": "Isabella",
    "last_name": "Smith",
    "department": "Marketing",
    "salary": 97000,
    "hire_date": "2025-03-18"
  },
  {
    "employee_id": 47,
    "first_name": "Aisha",
    "last_name": "Thompson",
    "department": "HR",
    "salary": 50000,
    "hire_date": "2019-10-18"
  },
  {
    "employee_id": 48,
    "first_name": "Raj",
    "last_name": "Williams",
    "department": "Data",
    "salary": 119000,
    "hire_date": "2019-10-04"
  },
  {
    "employee_id": 49,
    "first_name": "Isabella",
    "last_name": "Brown",
    "department": "Engineering",
    "salary": 145000,
    "hire_date": "2021-09-01"
  },
  {
    "employee_id": 50,
    "first_name": "Anil",
    "last_name": "Reddy",
    "department": "Finance",
    "salary": 97000,
    "hire_date": "2025-01-17"
  },
  {
    "employee_id": 51,
    "first_name": "Kiran",
    "last_name": "Verma",
    "department": "Sales",
    "salary": 133000,
    "hire_date": "2024-04-20"
  },
  {
    "employee_id": 52,
    "first_name": "Arjun",
    "last_name": "Hernandez",
    "department": "HR",
    "salary": 62000,
    "hire_date": "2020-01-22"
  },
  {
    "employee_id": 53,
    "first_name": "Anil",
    "last_name": "King",
    "department": "Marketing",
    "salary": 82000,
    "hire_date": "2023-10-01"
  },
  {
    "employee_id": 54,
    "first_name": "Harper",
    "last_name": "Shetty",
    "department": "Support",
    "salary": 48000,
    "hire_date": "2020-02-08"
  },
  {
    "employee_id": 55,
    "first_name": "Charlotte",
    "last_name": "Shetty",
    "department": "Engineering",
    "salary": 123000,
    "hire_date": "2020-03-23"
  },
  {
    "employee_id": 56,
    "first_name": "Chris",
    "last_name": "Harris",
    "department": "HR",
    "salary": 84000,
    "hire_date": "2024-01-12"
  },
  {
    "employee_id": 57,
    "first_name": "Amelia",
    "last_name": "White",
    "department": "Sales",
    "salary": 95000,
    "hire_date": "2024-03-09"
  },
  {
    "employee_id": 58,
    "first_name": "David",
    "last_name": "Wright",
    "department": "HR",
    "salary": 85000,
    "hire_date": "2020-02-06"
  },
  {
    "employee_id": 59,
    "first_name": "Pooja",
    "last_name": "Patel",
    "department": "Engineering",
    "salary": 81000,
    "hire_date": "2020-01-18"
  },
  {
    "employee_id": 60,
    "first_name": "Daniel",
    "last_name": "Hernandez",
    "department": "HR",
    "salary": 81000,
    "hire_date": "2024-05-25"
  },
  {
    "employee_id": 61,
    "first_name": "Charlotte",
    "last_name": "Williams",
    "department": "HR",
    "salary": 60000,
    "hire_date": "2023-04-02"
  },
  {
    "employee_id": 62,
    "first_name": "Noah",
    "last_name": "Martinez",
    "department": "Engineering",
    "salary": 138000,
    "hire_date": "2022-03-14"
  },
  {
    "employee_id": 63,
    "first_name": "Vivek",
    "last_name": "Shetty",
    "department": "Support",
    "salary": 80000,
    "hire_date": "2024-06-16"
  },
  {
    "employee_id": 64,
    "first_name": "Chris",
    "last_name": "Clark",
    "department": "Sales",
    "salary": 87000,
    "hire_date": "2019-08-28"
  },
  {
    "employee_id": 65,
    "first_name": "Meera",
    "last_name": "Patel",
    "department": "QA",
    "salary": 58000,
    "hire_date": "2022-07-08"
  },
  {
    "employee_id": 66,
    "first_name": "Sarah",
    "last_name": "Naidu",
    "department": "Engineering",
    "salary": 141000,
    "hire_date": "2024-08-21"
  },
  {
    "employee_id": 67,
    "first_name": "Daniel",
    "last_name": "Williams",
    "department": "Design",
    "salary": 92000,
    "hire_date": "2019-11-25"
  },
  {
    "employee_id": 68,
    "first_name": "David",
    "last_name": "Nair",
    "department": "Sales",
    "salary": 68000,
    "hire_date": "2021-08-21"
  },
  {
    "employee_id": 69,
    "first_name": "Emily",
    "last_name": "Verma",
    "department": "Support",
    "salary": 60000,
    "hire_date": "2025-06-29"
  },
  {
    "employee_id": 70,
    "first_name": "Mike",
    "last_name": "Yadav",
    "department": "QA",
    "salary": 60000,
    "hire_date": "2023-09-14"
  },
  {
    "employee_id": 71,
    "first_name": "Aisha",
    "last_name": "Verma",
    "department": "IT",
    "salary": 105000,
    "hire_date": "2021-12-04"
  },
  {
    "employee_id": 72,
    "first_name": "Anil",
    "last_name": "Rao",
    "department": "HR",
    "salary": 70000,
    "hire_date": "2021-09-04"
  },
  {
    "employee_id": 73,
    "first_name": "Charlotte",
    "last_name": "Anderson",
    "department": "Finance",
    "salary": 108000,
    "hire_date": "2024-02-16"
  },
  {
    "employee_id": 74,
    "first_name": "Ravi",
    "last_name": "Brown",
    "department": "Operations",
    "salary": 55000,
    "hire_date": "2024-02-21"
  },
  {
    "employee_id": 75,
    "first_name": "Karan",
    "last_name": "Wilson",
    "department": "QA",
    "salary": 59000,
    "hire_date": "2025-01-11"
  },
  {
    "employee_id": 76,
    "first_name": "Vikram",
    "last_name": "Martinez",
    "department": "HR",
    "salary": 58000,
    "hire_date": "2022-11-30"
  },
  {
    "employee_id": 77,
    "first_name": "Sophia",
    "last_name": "Hall",
    "department": "Marketing",
    "salary": 78000,
    "hire_date": "2020-10-08"
  },
  {
    "employee_id": 78,
    "first_name": "Rohan",
    "last_name": "Rao",
    "department": "Product",
    "salary": 118000,
    "hire_date": "2024-12-06"
  },
  {
    "employee_id": 79,
    "first_name": "Anil",
    "last_name": "Iyer",
    "department": "Engineering",
    "salary": 118000,
    "hire_date": "2020-02-29"
  },
  {
    "employee_id": 80,
    "first_name": "Brian",
    "last_name": "Taylor",
    "department": "Sales",
    "salary": 73000,
    "hire_date": "2025-03-16"
  },
  {
    "employee_id": 81,
    "first_name": "Emma",
    "last_name": "Clark",
    "department": "Sales",
    "salary": 137000,
    "hire_date": "2021-05-12"
  },
  {
    "employee_id": 82,
    "first_name": "Isabella",
    "last_name": "Martin",
    "department": "Data",
    "salary": 123000,
    "hire_date": "2024-09-01"
  },
  {
    "employee_id": 83,
    "first_name": "Brian",
    "last_name": "Williams",
    "department": "Product",
    "salary": 91000,
    "hire_date": "2023-10-01"
  },
  {
    "employee_id": 84,
    "first_name": "Mike",
    "last_name": "Doe",
    "department": "Finance",
    "salary": 112000,
    "hire_date": "2020-06-19"
  },
  {
    "employee_id": 85,
    "first_name": "Brian",
    "last_name": "Jackson",
    "department": "IT",
    "salary": 121000,
    "hire_date": "2025-03-09"
  },
  {
    "employee_id": 86,
    "first_name": "Amelia",
    "last_name": "Iyer",
    "department": "Data",
    "salary": 91000,
    "hire_date": "2020-04-03"
  },
  {
    "employee_id": 87,
    "first_name": "Vivek",
    "last_name": "Thomas",
    "department": "Marketing",
    "salary": 94000,
    "hire_date": "2019-05-28"
  },
  {
    "employee_id": 88,
    "first_name": "Aisha",
    "last_name": "Iyer",
    "department": "Operations",
    "salary": 64000,
    "hire_date": "2023-10-27"
  },
  {
    "employee_id": 89,
    "first_name": "Mike",
    "last_name": "Rodriguez",
    "department": "Sales",
    "salary": 106000,
    "hire_date": "2019-06-13"
  },
  {
    "employee_id": 90,
    "first_name": "Olivia",
    "last_name": "Mukherjee",
    "department": "Operations",
    "salary": 70000,
    "hire_date": "2020-02-26"
  },
  {
    "employee_id": 91,
    "first_name": "Tanvi",
    "last_name": "Iyer",
    "department": "Operations",
    "salary": 110000,
    "hire_date": "2023-07-23"
  },
  {
    "employee_id": 92,
    "first_name": "Meera",
    "last_name": "Thomas",
    "department": "QA",
    "salary": 70000,
    "hire_date": "2020-10-27"
  },
  {
    "employee_id": 93,
    "first_name": "Liam",
    "last_name": "Smith",
    "department": "Sales",
    "salary": 82000,
    "hire_date": "2022-09-22"
  },
  {
    "employee_id": 94,
    "first_name": "Anil",
    "last_name": "Pillai",
    "department": "Support",
    "salary": 60000,
    "hire_date": "2021-12-28"
  },
  {
    "employee_id": 95,
    "first_name": "Vivek",
    "last_name": "Wilson",
    "department": "Sales",
    "salary": 108000,
    "hire_date": "2019-06-08"
  },
  {
    "employee_id": 96,
    "first_name": "Kevin",
    "last_name": "Harris",
    "department": "Product",
    "salary": 138000,
    "hire_date": "2022-12-03"
  },
  {
    "employee_id": 97,
    "first_name": "Kevin",
    "last_name": "Thompson",
    "department": "Finance",
    "salary": 73000,
    "hire_date": "2021-03-02"
  },
  {
    "employee_id": 98,
    "first_name": "Isabella",
    "last_name": "Robinson",
    "department": "Support",
    "salary": 49000,
    "hire_date": "2022-02-17"
  },
  {
    "employee_id": 99,
    "first_name": "Pooja",
    "last_name": "Sharma",
    "department": "Operations",
    "salary": 80000,
    "hire_date": "2025-01-05"
  },
  {
    "employee_id": 100,
    "first_name": "Jane",
    "last_name": "Taylor",
    "department": "Operations",
    "salary": 71000,
    "hire_date": "2021-01-01"
  },
  {
    "employee_id": 101,
    "first_name": "Brian",
    "last_name": "Johnson",
    "department": "QA",
    "salary": 61000,
    "hire_date": "2023-11-15"
  },
  {
    "employee_id": 102,
    "first_name": "Kiran",
    "last_name": "Lewis",
    "department": "Operations",
    "salary": 82000,
    "hire_date": "2024-09-25"
  },
  {
    "employee_id": 103,
    "first_name": "Noah",
    "last_name": "Verma",
    "department": "Marketing",
    "salary": 72000,
    "hire_date": "2021-11-09"
  },
  {
    "employee_id": 104,
    "first_name": "Nisha",
    "last_name": "King",
    "department": "Engineering",
    "salary": 80000,
    "hire_date": "2024-10-30"
  },
  {
    "employee_id": 105,
    "first_name": "Kavya",
    "last_name": "Shetty",
    "department": "Design",
    "salary": 120000,
    "hire_date": "2021-03-18"
  },
  {
    "employee_id": 106,
    "first_name": "Amelia",
    "last_name": "Brown",
    "department": "Operations",
    "salary": 97000,
    "hire_date": "2022-09-14"
  },
  {
    "employee_id": 107,
    "first_name": "Ethan",
    "last_name": "Ghosh",
    "department": "QA",
    "salary": 109000,
    "hire_date": "2020-05-25"
  },
  {
    "employee_id": 108,
    "first_name": "Ava",
    "last_name": "Sharma",
    "department": "Data",
    "salary": 129000,
    "hire_date": "2023-07-31"
  },
  {
    "employee_id": 109,
    "first_name": "Charlotte",
    "last_name": "Das",
    "department": "Operations",
    "salary": 73000,
    "hire_date": "2025-03-20"
  },
  {
    "employee_id": 110,
    "first_name": "Chris",
    "last_name": "Hernandez",
    "department": "Sales",
    "salary": 108000,
    "hire_date": "2020-12-13"
  },
  {
    "employee_id": 111,
    "first_name": "Karan",
    "last_name": "Rodriguez",
    "department": "QA",
    "salary": 80000,
    "hire_date": "2025-02-22"
  },
  {
    "employee_id": 112,
    "first_name": "Ava",
    "last_name": "Clark",
    "department": "Engineering",
    "salary": 106000,
    "hire_date": "2023-10-27"
  },
  {
    "employee_id": 113,
    "first_name": "Sanjay",
    "last_name": "Bose",
    "department": "QA",
    "salary": 75000,
    "hire_date": "2024-03-19"
  },
  {
    "employee_id": 114,
    "first_name": "Mason",
    "last_name": "Mukherjee",
    "department": "Product",
    "salary": 107000,
    "hire_date": "2024-09-24"
  },
  {
    "employee_id": 115,
    "first_name": "Meera",
    "last_name": "Jackson",
    "department": "Product",
    "salary": 90000,
    "hire_date": "2022-03-08"
  },
  {
    "employee_id": 116,
    "first_name": "Anil",
    "last_name": "Chowdhury",
    "department": "Design",
    "salary": 99000,
    "hire_date": "2022-10-04"
  },
  {
    "employee_id": 117,
    "first_name": "Ravi",
    "last_name": "Garcia",
    "department": "Marketing",
    "salary": 103000,
    "hire_date": "2022-06-25"
  },
  {
    "employee_id": 118,
    "first_name": "Chris",
    "last_name": "Thomas",
    "department": "HR",
    "salary": 51000,
    "hire_date": "2019-07-09"
  },
  {
    "employee_id": 119,
    "first_name": "Arjun",
    "last_name": "Yadav",
    "department": "HR",
    "salary": 54000,
    "hire_date": "2024-02-09"
  },
  {
    "employee_id": 120,
    "first_name": "Raj",
    "last_name": "Verma",
    "department": "Support",
    "salary": 57000,
    "hire_date": "2023-04-22"
  },
  {
    "employee_id": 121,
    "first_name": "Charlotte",
    "last_name": "Garcia",
    "department": "Product",
    "salary": 98000,
    "hire_date": "2019-01-23"
  },
  {
    "employee_id": 122,
    "first_name": "Tanvi",
    "last_name": "King",
    "department": "Marketing",
    "salary": 74000,
    "hire_date": "2020-12-21"
  },
  {
    "employee_id": 123,
    "first_name": "Anita",
    "last_name": "Lopez",
    "department": "Data",
    "salary": 96000,
    "hire_date": "2025-04-02"
  },
  {
    "employee_id": 124,
    "first_name": "Emily",
    "last_name": "Lopez",
    "department": "HR",
    "salary": 58000,
    "hire_date": "2024-03-18"
  },
  {
    "employee_id": 125,
    "first_name": "Anita",
    "last_name": "Iyer",
    "department": "IT",
    "salary": 105000,
    "hire_date": "2023-12-18"
  },
  {
    "employee_id": 126,
    "first_name": "Kiran",
    "last_name": "Sharma",
    "department": "QA",
    "salary": 82000,
    "hire_date": "2025-02-22"
  },
  {
    "employee_id": 127,
    "first_name": "Daniel",
    "last_name": "Pillai",
    "department": "Product",
    "salary": 140000,
    "hire_date": "2024-01-18"
  },
  {
    "employee_id": 128,
    "first_name": "Ravi",
    "last_name": "Garcia",
    "department": "Finance",
    "salary": 105000,
    "hire_date": "2024-11-05"
  },
  {
    "employee_id": 129,
    "first_name": "Raj",
    "last_name": "Garcia",
    "department": "Product",
    "salary": 115000,
    "hire_date": "2023-12-07"
  },
  {
    "employee_id": 130,
    "first_name": "Nisha",
    "last_name": "Clark",
    "department": "Marketing",
    "salary": 75000,
    "hire_date": "2022-01-17"
  },
  {
    "employee_id": 131,
    "first_name": "Ethan",
    "last_name": "Patel",
    "department": "Operations",
    "salary": 60000,
    "hire_date": "2020-07-20"
  },
  {
    "employee_id": 132,
    "first_name": "Kevin",
    "last_name": "Allen",
    "department": "Sales",
    "salary": 79000,
    "hire_date": "2021-05-26"
  },
  {
    "employee_id": 133,
    "first_name": "Liam",
    "last_name": "Hernandez",
    "department": "Marketing",
    "salary": 81000,
    "hire_date": "2025-01-31"
  },
  {
    "employee_id": 134,
    "first_name": "Liam",
    "last_name": "Williams",
    "department": "Product",
    "salary": 106000,
    "hire_date": "2023-09-17"
  },
  {
    "employee_id": 135,
    "first_name": "Tanvi",
    "last_name": "Naidu",
    "department": "Support",
    "salary": 46000,
    "hire_date": "2025-06-16"
  },
  {
    "employee_id": 136,
    "first_name": "Arjun",
    "last_name": "Doe",
    "department": "Support",
    "salary": 67000,
    "hire_date": "2022-05-08"
  },
  {
    "employee_id": 137,
    "first_name": "Liam",
    "last_name": "Patel",
    "department": "Support",
    "salary": 79000,
    "hire_date": "2021-06-22"
  },
  {
    "employee_id": 138,
    "first_name": "Kevin",
    "last_name": "Robinson",
    "department": "Product",
    "salary": 135000,
    "hire_date": "2024-06-12"
  },
  {
    "employee_id": 139,
    "first_name": "Noah",
    "last_name": "Lee",
    "department": "Engineering",
    "salary": 131000,
    "hire_date": "2020-11-07"
  },
  {
    "employee_id": 140,
    "first_name": "Robert",
    "last_name": "Yadav",
    "department": "Product",
    "salary": 148000,
    "hire_date": "2019-04-21"
  },
  {
    "employee_id": 141,
    "first_name": "Aisha",
    "last_name": "Verma",
    "department": "Support",
    "salary": 46000,
    "hire_date": "2019-12-10"
  },
  {
    "employee_id": 142,
    "first_name": "Amelia",
    "last_name": "Anderson",
    "department": "IT",
    "salary": 124000,
    "hire_date": "2021-01-14"
  },
  {
    "employee_id": 143,
    "first_name": "Brian",
    "last_name": "Allen",
    "department": "Engineering",
    "salary": 121000,
    "hire_date": "2021-05-16"
  },
  {
    "employee_id": 144,
    "first_name": "Ethan",
    "last_name": "Lee",
    "department": "Product",
    "salary": 128000,
    "hire_date": "2022-02-13"
  },
  {
    "employee_id": 145,
    "first_name": "Brian",
    "last_name": "Davis",
    "department": "Support",
    "salary": 75000,
    "hire_date": "2019-03-21"
  },
  {
    "employee_id": 146,
    "first_name": "Rohan",
    "last_name": "Williams",
    "department": "Data",
    "salary": 134000,
    "hire_date": "2021-07-07"
  },
  {
    "employee_id": 147,
    "first_name": "David",
    "last_name": "Singh",
    "department": "IT",
    "salary": 70000,
    "hire_date": "2019-05-08"
  },
  {
    "employee_id": 148,
    "first_name": "Chris",
    "last_name": "Smith",
    "department": "HR",
    "salary": 89000,
    "hire_date": "2020-09-16"
  },
  {
    "employee_id": 149,
    "first_name": "Robert",
    "last_name": "Kumar",
    "department": "HR",
    "salary": 57000,
    "hire_date": "2025-04-29"
  },
  {
    "employee_id": 150,
    "first_name": "Harper",
    "last_name": "Das",
    "department": "HR",
    "salary": 66000,
    "hire_date": "2023-02-19"
  },
  {
    "employee_id": 151,
    "first_name": "Sanjay",
    "last_name": "Nair",
    "department": "Sales",
    "salary": 74000,
    "hire_date": "2020-11-01"
  },
  {
    "employee_id": 152,
    "first_name": "Tom",
    "last_name": "Naidu",
    "department": "Finance",
    "salary": 73000,
    "hire_date": "2022-07-01"
  },
  {
    "employee_id": 153,
    "first_name": "Kavya",
    "last_name": "Allen",
    "department": "QA",
    "salary": 80000,
    "hire_date": "2021-03-23"
  },
  {
    "employee_id": 154,
    "first_name": "Aisha",
    "last_name": "Das",
    "department": "Marketing",
    "salary": 113000,
    "hire_date": "2021-09-21"
  },
  {
    "employee_id": 155,
    "first_name": "Vivek",
    "last_name": "Singh",
    "department": "Marketing",
    "salary": 79000,
    "hire_date": "2020-05-10"
  },
  {
    "employee_id": 156,
    "first_name": "Mike",
    "last_name": "Walker",
    "department": "QA",
    "salary": 89000,
    "hire_date": "2023-10-21"
  },
  {
    "employee_id": 157,
    "first_name": "Mia",
    "last_name": "Brown",
    "department": "IT",
    "salary": 129000,
    "hire_date": "2022-10-29"
  },
  {
    "employee_id": 158,
    "first_name": "Liam",
    "last_name": "Reddy",
    "department": "Engineering",
    "salary": 93000,
    "hire_date": "2023-11-11"
  },
  {
    "employee_id": 159,
    "first_name": "Raj",
    "last_name": "Lopez",
    "department": "Operations",
    "salary": 100000,
    "hire_date": "2020-09-18"
  },
  {
    "employee_id": 160,
    "first_name": "Megan",
    "last_name": "Shetty",
    "department": "Support",
    "salary": 78000,
    "hire_date": "2022-01-11"
  },
  {
    "employee_id": 161,
    "first_name": "Rohan",
    "last_name": "Singh",
    "department": "QA",
    "salary": 85000,
    "hire_date": "2024-03-19"
  },
  {
    "employee_id": 162,
    "first_name": "Kiran",
    "last_name": "Naidu",
    "department": "Support",
    "salary": 62000,
    "hire_date": "2022-08-13"
  },
  {
    "employee_id": 163,
    "first_name": "Lisa",
    "last_name": "Robinson",
    "department": "HR",
    "salary": 78000,
    "hire_date": "2021-09-25"
  },
  {
    "employee_id": 164,
    "first_name": "Karan",
    "last_name": "Yadav",
    "department": "Product",
    "salary": 128000,
    "hire_date": "2022-10-09"
  },
  {
    "employee_id": 165,
    "first_name": "Priya",
    "last_name": "Lewis",
    "department": "Engineering",
    "salary": 103000,
    "hire_date": "2024-06-20"
  },
  {
    "employee_id": 166,
    "first_name": "Jacob",
    "last_name": "Martinez",
    "department": "HR",
    "salary": 71000,
    "hire_date": "2022-02-19"
  },
  {
    "employee_id": 167,
    "first_name": "Vivek",
    "last_name": "Robinson",
    "department": "QA",
    "salary": 90000,
    "hire_date": "2019-02-11"
  },
  {
    "employee_id": 168,
    "first_name": "Chris",
    "last_name": "Davis",
    "department": "Design",
    "salary": 75000,
    "hire_date": "2023-07-23"
  },
  {
    "employee_id": 169,
    "first_name": "Neha",
    "last_name": "Chauhan",
    "department": "Product",
    "salary": 110000,
    "hire_date": "2024-05-04"
  },
  {
    "employee_id": 170,
    "first_name": "Nisha",
    "last_name": "Reddy",
    "department": "IT",
    "salary": 122000,
    "hire_date": "2019-03-12"
  },
  {
    "employee_id": 171,
    "first_name": "Alex",
    "last_name": "Thompson",
    "department": "Marketing",
    "salary": 85000,
    "hire_date": "2021-09-23"
  },
  {
    "employee_id": 172,
    "first_name": "Anil",
    "last_name": "Naidu",
    "department": "Finance",
    "salary": 117000,
    "hire_date": "2024-04-22"
  },
  {
    "employee_id": 173,
    "first_name": "Anita",
    "last_name": "Walker",
    "department": "Design",
    "salary": 87000,
    "hire_date": "2025-03-04"
  },
  {
    "employee_id": 174,
    "first_name": "Jacob",
    "last_name": "Das",
    "department": "Operations",
    "salary": 84000,
    "hire_date": "2022-01-14"
  },
  {
    "employee_id": 175,
    "first_name": "Brian",
    "last_name": "Thompson",
    "department": "Finance",
    "salary": 85000,
    "hire_date": "2021-02-27"
  },
  {
    "employee_id": 176,
    "first_name": "Emily",
    "last_name": "Pillai",
    "department": "Operations",
    "salary": 89000,
    "hire_date": "2021-01-28"
  },
  {
    "employee_id": 177,
    "first_name": "Olivia",
    "last_name": "Pillai",
    "department": "HR",
    "salary": 80000,
    "hire_date": "2022-02-06"
  },
  {
    "employee_id": 178,
    "first_name": "Aisha",
    "last_name": "Chauhan",
    "department": "Data",
    "salary": 157000,
    "hire_date": "2022-03-05"
  },
  {
    "employee_id": 179,
    "first_name": "Chris",
    "last_name": "Clark",
    "department": "Marketing",
    "salary": 74000,
    "hire_date": "2023-01-18"
  },
  {
    "employee_id": 180,
    "first_name": "Ava",
    "last_name": "Doe",
    "department": "Sales",
    "salary": 128000,
    "hire_date": "2020-06-02"
  },
  {
    "employee_id": 181,
    "first_name": "Mike",
    "last_name": "Williams",
    "department": "Finance",
    "salary": 140000,
    "hire_date": "2022-04-11"
  },
  {
    "employee_id": 182,
    "first_name": "Robert",
    "last_name": "Chowdhury",
    "department": "Data",
    "salary": 152000,
    "hire_date": "2020-02-25"
  },
  {
    "employee_id": 183,
    "first_name": "Karan",
    "last_name": "Clark",
    "department": "Engineering",
    "salary": 140000,
    "hire_date": "2024-05-14"
  },
  {
    "employee_id": 184,
    "first_name": "Isabella",
    "last_name": "White",
    "department": "Product",
    "salary": 86000,
    "hire_date": "2021-10-31"
  },
  {
    "employee_id": 185,
    "first_name": "Emily",
    "last_name": "Brown",
    "department": "Product",
    "salary": 131000,
    "hire_date": "2024-07-07"
  },
  {
    "employee_id": 186,
    "first_name": "Karan",
    "last_name": "Chowdhury",
    "department": "Marketing",
    "salary": 103000,
    "hire_date": "2019-08-08"
  },
  {
    "employee_id": 187,
    "first_name": "Laura",
    "last_name": "Verma",
    "department": "Sales",
    "salary": 98000,
    "hire_date": "2019-12-15"
  },
  {
    "employee_id": 188,
    "first_name": "Emily",
    "last_name": "Iyer",
    "department": "HR",
    "salary": 76000,
    "hire_date": "2021-07-13"
  },
  {
    "employee_id": 189,
    "first_name": "Noah",
    "last_name": "Wright",
    "department": "Design",
    "salary": 118000,
    "hire_date": "2023-12-19"
  },
  {
    "employee_id": 190,
    "first_name": "Aisha",
    "last_name": "King",
    "department": "Finance",
    "salary": 109000,
    "hire_date": "2025-05-18"
  },
  {
    "employee_id": 191,
    "first_name": "Sarah",
    "last_name": "Yadav",
    "department": "QA",
    "salary": 102000,
    "hire_date": "2020-02-11"
  },
  {
    "employee_id": 192,
    "first_name": "Raj",
    "last_name": "Martin",
    "department": "HR",
    "salary": 66000,
    "hire_date": "2019-11-29"
  },
  {
    "employee_id": 193,
    "first_name": "Sophia",
    "last_name": "White",
    "department": "Sales",
    "salary": 130000,
    "hire_date": "2019-11-04"
  },
  {
    "employee_id": 194,
    "first_name": "John",
    "last_name": "Hernandez",
    "department": "Sales",
    "salary": 117000,
    "hire_date": "2025-08-29"
  },
  {
    "employee_id": 195,
    "first_name": "Alex",
    "last_name": "Johnson",
    "department": "Product",
    "salary": 109000,
    "hire_date": "2022-03-26"
  },
  {
    "employee_id": 196,
    "first_name": "Alex",
    "last_name": "Das",
    "department": "Data",
    "salary": 148000,
    "hire_date": "2019-10-19"
  },
  {
    "employee_id": 197,
    "first_name": "Kevin",
    "last_name": "Martinez",
    "department": "IT",
    "salary": 90000,
    "hire_date": "2023-10-08"
  },
  {
    "employee_id": 198,
    "first_name": "Rohan",
    "last_name": "Thompson",
    "department": "Marketing",
    "salary": 101000,
    "hire_date": "2020-09-02"
  },
  {
    "employee_id": 199,
    "first_name": "Laura",
    "last_name": "Brown",
    "department": "Finance",
    "salary": 77000,
    "hire_date": "2020-11-10"
  },
  {
    "employee_id": 200,
    "first_name": "Sanjay",
    "last_name": "Pillai",
    "department": "Finance",
    "salary": 142000,
    "hire_date": "2022-03-28"
  },
  {
    "employee_id": 201,
    "first_name": "Emily",
    "last_name": "Lopez",
    "department": "Product",
    "salary": 118000,
    "hire_date": "2023-07-07"
  },
  {
    "employee_id": 202,
    "first_name": "Vikram",
    "last_name": "Patel",
    "department": "Finance",
    "salary": 133000,
    "hire_date": "2023-11-29"
  },
  {
    "employee_id": 203,
    "first_name": "Sanjay",
    "last_name": "Johnson",
    "department": "Marketing",
    "salary": 116000,
    "hire_date": "2023-11-05"
  },
  {
    "employee_id": 204,
    "first_name": "Ethan",
    "last_name": "Nair",
    "department": "Data",
    "salary": 122000,
    "hire_date": "2019-04-16"
  },
  {
    "employee_id": 205,
    "first_name": "Kevin",
    "last_name": "Mukherjee",
    "department": "Marketing",
    "salary": 113000,
    "hire_date": "2025-06-14"
  },
  {
    "employee_id": 206,
    "first_name": "Jane",
    "last_name": "Chauhan",
    "department": "QA",
    "salary": 98000,
    "hire_date": "2022-01-08"
  },
  {
    "employee_id": 207,
    "first_name": "Mike",
    "last_name": "Chauhan",
    "department": "QA",
    "salary": 103000,
    "hire_date": "2020-12-18"
  },
  {
    "employee_id": 208,
    "first_name": "Anita",
    "last_name": "Bose",
    "department": "Product",
    "salary": 136000,
    "hire_date": "2022-02-13"
  },
  {
    "employee_id": 209,
    "first_name": "Aisha",
    "last_name": "King",
    "department": "Sales",
    "salary": 122000,
    "hire_date": "2020-01-09"
  },
  {
    "employee_id": 210,
    "first_name": "Jacob",
    "last_name": "Hernandez",
    "department": "Product",
    "salary": 122000,
    "hire_date": "2022-08-08"
  },
  {
    "employee_id": 211,
    "first_name": "Tom",
    "last_name": "Jackson",
    "department": "IT",
    "salary": 107000,
    "hire_date": "2023-08-14"
  },
  {
    "employee_id": 212,
    "first_name": "Priya",
    "last_name": "Clark",
    "department": "Data",
    "salary": 141000,
    "hire_date": "2025-03-03"
  },
  {
    "employee_id": 213,
    "first_name": "Harper",
    "last_name": "Davis",
    "department": "Engineering",
    "salary": 120000,
    "hire_date": "2021-10-30"
  },
  {
    "employee_id": 214,
    "first_name": "Emily",
    "last_name": "Singh",
    "department": "Operations",
    "salary": 80000,
    "hire_date": "2024-10-08"
  },
  {
    "employee_id": 215,
    "first_name": "Anil",
    "last_name": "Patel",
    "department": "Engineering",
    "salary": 139000,
    "hire_date": "2023-08-20"
  },
  {
    "employee_id": 216,
    "first_name": "Chris",
    "last_name": "Gupta",
    "department": "Engineering",
    "salary": 126000,
    "hire_date": "2024-08-03"
  },
  {
    "employee_id": 217,
    "first_name": "Mason",
    "last_name": "Chauhan",
    "department": "IT",
    "salary": 71000,
    "hire_date": "2021-04-13"
  },
  {
    "employee_id": 218,
    "first_name": "Neha",
    "last_name": "Anderson",
    "department": "Finance",
    "salary": 106000,
    "hire_date": "2023-11-30"
  },
  {
    "employee_id": 219,
    "first_name": "Priya",
    "last_name": "Taylor",
    "department": "Data",
    "salary": 93000,
    "hire_date": "2021-09-07"
  },
  {
    "employee_id": 220,
    "first_name": "Daniel",
    "last_name": "Rodriguez",
    "department": "Data",
    "salary": 160000,
    "hire_date": "2019-02-26"
  },
  {
    "employee_id": 221,
    "first_name": "Liam",
    "last_name": "Davis",
    "department": "Design",
    "salary": 74000,
    "hire_date": "2020-04-09"
  },
  {
    "employee_id": 222,
    "first_name": "Emily",
    "last_name": "Bose",
    "department": "Product",
    "salary": 99000,
    "hire_date": "2024-08-03"
  },
  {
    "employee_id": 223,
    "first_name": "Alex",
    "last_name": "Sharma",
    "department": "Data",
    "salary": 124000,
    "hire_date": "2023-08-29"
  },
  {
    "employee_id": 224,
    "first_name": "Arjun",
    "last_name": "Garcia",
    "department": "Product",
    "salary": 138000,
    "hire_date": "2025-03-07"
  },
  {
    "employee_id": 225,
    "first_name": "Noah",
    "last_name": "Harris",
    "department": "Sales",
    "salary": 136000,
    "hire_date": "2024-09-12"
  },
  {
    "employee_id": 226,
    "first_name": "Robert",
    "last_name": "Brown",
    "department": "Data",
    "salary": 125000,
    "hire_date": "2023-08-27"
  },
  {
    "employee_id": 227,
    "first_name": "Vikram",
    "last_name": "Robinson",
    "department": "Operations",
    "salary": 107000,
    "hire_date": "2019-01-11"
  },
  {
    "employee_id": 228,
    "first_name": "Kiran",
    "last_name": "Rodriguez",
    "department": "Finance",
    "salary": 145000,
    "hire_date": "2025-07-03"
  },
  {
    "employee_id": 229,
    "first_name": "Priya",
    "last_name": "Thomas",
    "department": "IT",
    "salary": 122000,
    "hire_date": "2025-01-15"
  },
  {
    "employee_id": 230,
    "first_name": "Jacob",
    "last_name": "Lee",
    "department": "Product",
    "salary": 150000,
    "hire_date": "2025-02-03"
  },
  {
    "employee_id": 231,
    "first_name": "Harper",
    "last_name": "Lewis",
    "department": "Support",
    "salary": 57000,
    "hire_date": "2021-09-05"
  },
  {
    "employee_id": 232,
    "first_name": "Noah",
    "last_name": "Thompson",
    "department": "QA",
    "salary": 109000,
    "hire_date": "2023-08-10"
  },
  {
    "employee_id": 233,
    "first_name": "Ethan",
    "last_name": "Pillai",
    "department": "Engineering",
    "salary": 140000,
    "hire_date": "2023-04-11"
  },
  {
    "employee_id": 234,
    "first_name": "Anil",
    "last_name": "Bose",
    "department": "Support",
    "salary": 54000,
    "hire_date": "2024-07-21"
  },
  {
    "employee_id": 235,
    "first_name": "Robert",
    "last_name": "Sharma",
    "department": "Engineering",
    "salary": 155000,
    "hire_date": "2022-09-21"
  },
  {
    "employee_id": 236,
    "first_name": "Mason",
    "last_name": "Wilson",
    "department": "Marketing",
    "salary": 93000,
    "hire_date": "2024-02-15"
  },
  {
    "employee_id": 237,
    "first_name": "Kiran",
    "last_name": "Thomas",
    "department": "Engineering",
    "salary": 132000,
    "hire_date": "2020-09-24"
  },
  {
    "employee_id": 238,
    "first_name": "Arjun",
    "last_name": "Martinez",
    "department": "Marketing",
    "salary": 81000,
    "hire_date": "2023-06-17"
  },
  {
    "employee_id": 239,
    "first_name": "Lisa",
    "last_name": "Lee",
    "department": "IT",
    "salary": 113000,
    "hire_date": "2022-07-21"
  },
  {
    "employee_id": 240,
    "first_name": "Nisha",
    "last_name": "Chauhan",
    "department": "IT",
    "salary": 127000,
    "hire_date": "2025-01-25"
  },
  {
    "employee_id": 241,
    "first_name": "Isha",
    "last_name": "Brown",
    "department": "Engineering",
    "salary": 110000,
    "hire_date": "2022-03-23"
  },
  {
    "employee_id": 242,
    "first_name": "Meera",
    "last_name": "Davis",
    "department": "HR",
    "salary": 77000,
    "hire_date": "2020-02-08"
  },
  {
    "employee_id": 243,
    "first_name": "Nisha",
    "last_name": "Wilson",
    "department": "IT",
    "salary": 121000,
    "hire_date": "2020-11-12"
  },
  {
    "employee_id": 244,
    "first_name": "Ava",
    "last_name": "Smith",
    "department": "Data",
    "salary": 95000,
    "hire_date": "2022-08-21"
  },
  {
    "employee_id": 245,
    "first_name": "Alex",
    "last_name": "Walker",
    "department": "Engineering",
    "salary": 127000,
    "hire_date": "2023-10-31"
  },
  {
    "employee_id": 246,
    "first_name": "Sophia",
    "last_name": "Gupta",
    "department": "Sales",
    "salary": 112000,
    "hire_date": "2025-05-07"
  },
  {
    "employee_id": 247,
    "first_name": "Megan",
    "last_name": "Jackson",
    "department": "IT",
    "salary": 87000,
    "hire_date": "2019-11-20"
  },
  {
    "employee_id": 248,
    "first_name": "Noah",
    "last_name": "Yadav",
    "department": "QA",
    "salary": 98000,
    "hire_date": "2021-09-13"
  },
  {
    "employee_id": 249,
    "first_name": "Aisha",
    "last_name": "Thomas",
    "department": "Product",
    "salary": 109000,
    "hire_date": "2024-03-03"
  },
  {
    "employee_id": 250,
    "first_name": "Brian",
    "last_name": "Lopez",
    "department": "IT",
    "salary": 97000,
    "hire_date": "2019-02-08"
  },
  {
    "employee_id": 251,
    "first_name": "Alex",
    "last_name": "Mukherjee",
    "department": "Product",
    "salary": 149000,
    "hire_date": "2020-10-09"
  },
  {
    "employee_id": 252,
    "first_name": "Mason",
    "last_name": "Walker",
    "department": "Marketing",
    "salary": 97000,
    "hire_date": "2022-05-10"
  },
  {
    "employee_id": 253,
    "first_name": "Amelia",
    "last_name": "Das",
    "department": "IT",
    "salary": 97000,
    "hire_date": "2024-02-15"
  },
  {
    "employee_id": 254,
    "first_name": "Chris",
    "last_name": "Allen",
    "department": "Finance",
    "salary": 131000,
    "hire_date": "2020-03-12"
  },
  {
    "employee_id": 255,
    "first_name": "Noah",
    "last_name": "Verma",
    "department": "HR",
    "salary": 72000,
    "hire_date": "2025-06-12"
  },
  {
    "employee_id": 256,
    "first_name": "Vivek",
    "last_name": "Clark",
    "department": "Finance",
    "salary": 72000,
    "hire_date": "2023-06-10"
  },
  {
    "employee_id": 257,
    "first_name": "John",
    "last_name": "Verma",
    "department": "Finance",
    "salary": 76000,
    "hire_date": "2024-07-27"
  },
  {
    "employee_id": 258,
    "first_name": "Tanvi",
    "last_name": "Thompson",
    "department": "Finance",
    "salary": 147000,
    "hire_date": "2022-12-14"
  },
  {
    "employee_id": 259,
    "first_name": "Raj",
    "last_name": "Harris",
    "department": "HR",
    "salary": 89000,
    "hire_date": "2021-10-23"
  },
  {
    "employee_id": 260,
    "first_name": "Ravi",
    "last_name": "Shetty",
    "department": "IT",
    "salary": 82000,
    "hire_date": "2020-02-02"
  },
  {
    "employee_id": 261,
    "first_name": "Pooja",
    "last_name": "Johnson",
    "department": "IT",
    "salary": 104000,
    "hire_date": "2023-12-11"
  },
  {
    "employee_id": 262,
    "first_name": "Aisha",
    "last_name": "Hall",
    "department": "Engineering",
    "salary": 96000,
    "hire_date": "2020-01-05"
  },
  {
    "employee_id": 263,
    "first_name": "Ethan",
    "last_name": "Pillai",
    "department": "Finance",
    "salary": 123000,
    "hire_date": "2020-12-20"
  },
  {
    "employee_id": 264,
    "first_name": "Robert",
    "last_name": "Patel",
    "department": "HR",
    "salary": 73000,
    "hire_date": "2024-12-14"
  },
  {
    "employee_id": 265,
    "first_name": "Emma",
    "last_name": "Jackson",
    "department": "Design",
    "salary": 76000,
    "hire_date": "2024-05-27"
  },
  {
    "employee_id": 266,
    "first_name": "Meera",
    "last_name": "Lee",
    "department": "Finance",
    "salary": 84000,
    "hire_date": "2024-04-02"
  },
  {
    "employee_id": 267,
    "first_name": "Laura",
    "last_name": "Chauhan",
    "department": "Marketing",
    "salary": 74000,
    "hire_date": "2023-06-16"
  },
  {
    "employee_id": 268,
    "first_name": "Mia",
    "last_name": "Davis",
    "department": "Design",
    "salary": 110000,
    "hire_date": "2023-06-05"
  },
  {
    "employee_id": 269,
    "first_name": "Brian",
    "last_name": "Patel",
    "department": "Engineering",
    "salary": 95000,
    "hire_date": "2024-02-06"
  },
  {
    "employee_id": 270,
    "first_name": "Kavya",
    "last_name": "Pillai",
    "department": "Operations",
    "salary": 98000,
    "hire_date": "2021-12-09"
  },
  {
    "employee_id": 271,
    "first_name": "Noah",
    "last_name": "Chowdhury",
    "department": "QA",
    "salary": 78000,
    "hire_date": "2020-03-19"
  },
  {
    "employee_id": 272,
    "first_name": "Kevin",
    "last_name": "Kumar",
    "department": "IT",
    "salary": 68000,
    "hire_date": "2025-04-18"
  },
  {
    "employee_id": 273,
    "first_name": "Isha",
    "last_name": "Thompson",
    "department": "Operations",
    "salary": 96000,
    "hire_date": "2019-09-16"
  },
  {
    "employee_id": 274,
    "first_name": "Harper",
    "last_name": "Das",
    "department": "IT",
    "salary": 103000,
    "hire_date": "2023-07-31"
  },
  {
    "employee_id": 275,
    "first_name": "Robert",
    "last_name": "Johnson",
    "department": "Marketing",
    "salary": 120000,
    "hire_date": "2019-06-02"
  },
  {
    "employee_id": 276,
    "first_name": "Priya",
    "last_name": "Taylor",
    "department": "Finance",
    "salary": 82000,
    "hire_date": "2021-08-19"
  },
  {
    "employee_id": 277,
    "first_name": "Robert",
    "last_name": "Allen",
    "department": "Design",
    "salary": 89000,
    "hire_date": "2023-02-28"
  },
  {
    "employee_id": 278,
    "first_name": "Meera",
    "last_name": "Das",
    "department": "IT",
    "salary": 118000,
    "hire_date": "2025-08-02"
  },
  {
    "employee_id": 279,
    "first_name": "Kiran",
    "last_name": "Thomas",
    "department": "Data",
    "salary": 143000,
    "hire_date": "2020-02-10"
  },
  {
    "employee_id": 280,
    "first_name": "Isha",
    "last_name": "Hernandez",
    "department": "Product",
    "salary": 115000,
    "hire_date": "2019-05-15"
  },
  {
    "employee_id": 281,
    "first_name": "Mia",
    "last_name": "Martin",
    "department": "Data",
    "salary": 146000,
    "hire_date": "2023-12-27"
  },
  {
    "employee_id": 282,
    "first_name": "Mia",
    "last_name": "Wilson",
    "department": "HR",
    "salary": 73000,
    "hire_date": "2025-02-08"
  },
  {
    "employee_id": 283,
    "first_name": "Jacob",
    "last_name": "Williams",
    "department": "IT",
    "salary": 115000,
    "hire_date": "2022-02-04"
  },
  {
    "employee_id": 284,
    "first_name": "Emily",
    "last_name": "Lopez",
    "department": "HR",
    "salary": 55000,
    "hire_date": "2021-05-18"
  },
  {
    "employee_id": 285,
    "first_name": "Raj",
    "last_name": "Nair",
    "department": "IT",
    "salary": 67000,
    "hire_date": "2019-07-27"
  },
  {
    "employee_id": 286,
    "first_name": "Sophia",
    "last_name": "Anderson",
    "department": "Operations",
    "salary": 105000,
    "hire_date": "2025-05-01"
  },
  {
    "employee_id": 287,
    "first_name": "David",
    "last_name": "Chauhan",
    "department": "HR",
    "salary": 85000,
    "hire_date": "2021-04-28"
  },
  {
    "employee_id": 288,
    "first_name": "Olivia",
    "last_name": "Thompson",
    "department": "QA",
    "salary": 76000,
    "hire_date": "2020-08-27"
  },
  {
    "employee_id": 289,
    "first_name": "John",
    "last_name": "Robinson",
    "department": "QA",
    "salary": 109000,
    "hire_date": "2020-08-15"
  },
  {
    "employee_id": 290,
    "first_name": "Rohan",
    "last_name": "Martinez",
    "department": "Sales",
    "salary": 82000,
    "hire_date": "2020-03-26"
  },
  {
    "employee_id": 291,
    "first_name": "Jane",
    "last_name": "Anderson",
    "department": "IT",
    "salary": 66000,
    "hire_date": "2023-01-07"
  },
  {
    "employee_id": 292,
    "first_name": "Aisha",
    "last_name": "Lewis",
    "department": "HR",
    "salary": 51000,
    "hire_date": "2020-12-14"
  },
  {
    "employee_id": 293,
    "first_name": "Sarah",
    "last_name": "Anderson",
    "department": "Finance",
    "salary": 123000,
    "hire_date": "2024-11-24"
  },
  {
    "employee_id": 294,
    "first_name": "Meera",
    "last_name": "Brown",
    "department": "Marketing",
    "salary": 90000,
    "hire_date": "2024-01-11"
  },
  {
    "employee_id": 295,
    "first_name": "Vikram",
    "last_name": "Naidu",
    "department": "Operations",
    "salary": 61000,
    "hire_date": "2024-01-26"
  },
  {
    "employee_id": 296,
    "first_name": "Kevin",
    "last_name": "Yadav",
    "department": "Design",
    "salary": 62000,
    "hire_date": "2024-11-05"
  },
  {
    "employee_id": 297,
    "first_name": "Harper",
    "last_name": "Bose",
    "department": "Finance",
    "salary": 73000,
    "hire_date": "2019-09-07"
  },
  {
    "employee_id": 298,
    "first_name": "Charlotte",
    "last_name": "King",
    "department": "Product",
    "salary": 93000,
    "hire_date": "2024-07-01"
  },
  {
    "employee_id": 299,
    "first_name": "Mason",
    "last_name": "Brown",
    "department": "Data",
    "salary": 100000,
    "hire_date": "2022-08-12"
  },
  {
    "employee_id": 300,
    "first_name": "Laura",
    "last_name": "Brown",
    "department": "QA",
    "salary": 63000,
    "hire_date": "2022-01-31"
  },
  {
    "employee_id": 301,
    "first_name": "Raj",
    "last_name": "Naidu",
    "department": "QA",
    "salary": 90000,
    "hire_date": "2022-08-24"
  },
  {
    "employee_id": 302,
    "first_name": "Sanjay",
    "last_name": "Gupta",
    "department": "Support",
    "salary": 63000,
    "hire_date": "2024-02-02"
  },
  {
    "employee_id": 303,
    "first_name": "Sanjay",
    "last_name": "King",
    "department": "Design",
    "salary": 66000,
    "hire_date": "2020-04-13"
  },
  {
    "employee_id": 304,
    "first_name": "Pooja",
    "last_name": "Singh",
    "department": "IT",
    "salary": 92000,
    "hire_date": "2023-10-28"
  },
  {
    "employee_id": 305,
    "first_name": "Kevin",
    "last_name": "Hernandez",
    "department": "Product",
    "salary": 123000,
    "hire_date": "2024-02-01"
  },
  {
    "employee_id": 306,
    "first_name": "Liam",
    "last_name": "Shetty",
    "department": "Support",
    "salary": 51000,
    "hire_date": "2022-07-04"
  },
  {
    "employee_id": 307,
    "first_name": "Ethan",
    "last_name": "Ghosh",
    "department": "Support",
    "salary": 61000,
    "hire_date": "2023-03-14"
  },
  {
    "employee_id": 308,
    "first_name": "Kavya",
    "last_name": "Kumar",
    "department": "Sales",
    "salary": 68000,
    "hire_date": "2020-01-09"
  },
  {
    "employee_id": 309,
    "first_name": "Lisa",
    "last_name": "King",
    "department": "Marketing",
    "salary": 66000,
    "hire_date": "2023-03-07"
  },
  {
    "employee_id": 310,
    "first_name": "Neha",
    "last_name": "Williams",
    "department": "Sales",
    "salary": 135000,
    "hire_date": "2025-04-19"
  },
  {
    "employee_id": 311,
    "first_name": "Isabella",
    "last_name": "Ghosh",
    "department": "Design",
    "salary": 67000,
    "hire_date": "2023-08-10"
  },
  {
    "employee_id": 312,
    "first_name": "Anil",
    "last_name": "Chauhan",
    "department": "Operations",
    "salary": 82000,
    "hire_date": "2019-07-30"
  },
  {
    "employee_id": 313,
    "first_name": "Sanjay",
    "last_name": "Rodriguez",
    "department": "Finance",
    "salary": 115000,
    "hire_date": "2020-02-29"
  },
  {
    "employee_id": 314,
    "first_name": "Vikram",
    "last_name": "Martin",
    "department": "QA",
    "salary": 64000,
    "hire_date": "2024-05-29"
  },
  {
    "employee_id": 315,
    "first_name": "Tom",
    "last_name": "Walker",
    "department": "HR",
    "salary": 85000,
    "hire_date": "2023-02-14"
  },
  {
    "employee_id": 316,
    "first_name": "Ravi",
    "last_name": "Robinson",
    "department": "Marketing",
    "salary": 96000,
    "hire_date": "2021-07-15"
  },
  {
    "employee_id": 317,
    "first_name": "Neha",
    "last_name": "Singh",
    "department": "Support",
    "salary": 84000,
    "hire_date": "2025-03-30"
  },
  {
    "employee_id": 318,
    "first_name": "Sanjay",
    "last_name": "Ghosh",
    "department": "Engineering",
    "salary": 114000,
    "hire_date": "2019-04-29"
  },
  {
    "employee_id": 319,
    "first_name": "Emma",
    "last_name": "Das",
    "department": "Sales",
    "salary": 99000,
    "hire_date": "2022-10-23"
  },
  {
    "employee_id": 320,
    "first_name": "John",
    "last_name": "White",
    "department": "Operations",
    "salary": 110000,
    "hire_date": "2020-08-09"
  },
  {
    "employee_id": 321,
    "first_name": "Anil",
    "last_name": "Young",
    "department": "QA",
    "salary": 59000,
    "hire_date": "2020-08-04"
  },
  {
    "employee_id": 322,
    "first_name": "Raj",
    "last_name": "Smith",
    "department": "Data",
    "salary": 101000,
    "hire_date": "2024-12-12"
  },
  {
    "employee_id": 323,
    "first_name": "Noah",
    "last_name": "Hernandez",
    "department": "HR",
    "salary": 79000,
    "hire_date": "2022-10-28"
  },
  {
    "employee_id": 324,
    "first_name": "Mia",
    "last_name": "Rodriguez",
    "department": "Sales",
    "salary": 101000,
    "hire_date": "2025-05-13"
  },
  {
    "employee_id": 325,
    "first_name": "Lisa",
    "last_name": "Williams",
    "department": "QA",
    "salary": 64000,
    "hire_date": "2020-10-06"
  },
  {
    "employee_id": 326,
    "first_name": "Sarah",
    "last_name": "Mukherjee",
    "department": "QA",
    "salary": 60000,
    "hire_date": "2022-01-19"
  },
  {
    "employee_id": 327,
    "first_name": "Anil",
    "last_name": "King",
    "department": "Product",
    "salary": 142000,
    "hire_date": "2023-12-16"
  },
  {
    "employee_id": 328,
    "first_name": "Emma",
    "last_name": "Martin",
    "department": "Support",
    "salary": 77000,
    "hire_date": "2020-04-11"
  },
  {
    "employee_id": 329,
    "first_name": "Amelia",
    "last_name": "Taylor",
    "department": "Operations",
    "salary": 73000,
    "hire_date": "2025-08-26"
  },
  {
    "employee_id": 330,
    "first_name": "Anita",
    "last_name": "Ghosh",
    "department": "Product",
    "salary": 119000,
    "hire_date": "2019-07-06"
  },
  {
    "employee_id": 331,
    "first_name": "Charlotte",
    "last_name": "Nair",
    "department": "HR",
    "salary": 53000,
    "hire_date": "2019-02-01"
  },
  {
    "employee_id": 332,
    "first_name": "Ava",
    "last_name": "Martin",
    "department": "HR",
    "salary": 58000,
    "hire_date": "2021-11-12"
  },
  {
    "employee_id": 333,
    "first_name": "Ethan",
    "last_name": "Taylor",
    "department": "Finance",
    "salary": 70000,
    "hire_date": "2024-07-30"
  },
  {
    "employee_id": 334,
    "first_name": "Amelia",
    "last_name": "White",
    "department": "Data",
    "salary": 106000,
    "hire_date": "2023-04-07"
  },
  {
    "employee_id": 335,
    "first_name": "Nisha",
    "last_name": "Thompson",
    "department": "Design",
    "salary": 92000,
    "hire_date": "2025-04-07"
  },
  {
    "employee_id": 336,
    "first_name": "Jacob",
    "last_name": "Brown",
    "department": "IT",
    "salary": 115000,
    "hire_date": "2019-06-23"
  },
  {
    "employee_id": 337,
    "first_name": "Jane",
    "last_name": "Lopez",
    "department": "Support",
    "salary": 49000,
    "hire_date": "2022-07-06"
  },
  {
    "employee_id": 338,
    "first_name": "Amelia",
    "last_name": "Verma",
    "department": "QA",
    "salary": 80000,
    "hire_date": "2023-09-07"
  },
  {
    "employee_id": 339,
    "first_name": "Emily",
    "last_name": "Young",
    "department": "Finance",
    "salary": 72000,
    "hire_date": "2022-08-23"
  },
  {
    "employee_id": 340,
    "first_name": "Isha",
    "last_name": "Lopez",
    "department": "Sales",
    "salary": 106000,
    "hire_date": "2019-12-27"
  },
  {
    "employee_id": 341,
    "first_name": "Tom",
    "last_name": "Garcia",
    "department": "Support",
    "salary": 72000,
    "hire_date": "2025-08-09"
  },
  {
    "employee_id": 342,
    "first_name": "Anita",
    "last_name": "Davis",
    "department": "Support",
    "salary": 70000,
    "hire_date": "2022-06-24"
  },
  {
    "employee_id": 343,
    "first_name": "Isabella",
    "last_name": "Thompson",
    "department": "Data",
    "salary": 132000,
    "hire_date": "2020-11-19"
  },
  {
    "employee_id": 344,
    "first_name": "Vikram",
    "last_name": "Chowdhury",
    "department": "Marketing",
    "salary": 67000,
    "hire_date": "2024-12-13"
  },
  {
    "employee_id": 345,
    "first_name": "Chris",
    "last_name": "Singh",
    "department": "Design",
    "salary": 82000,
    "hire_date": "2022-12-09"
  },
  {
    "employee_id": 346,
    "first_name": "Pooja",
    "last_name": "Thomas",
    "department": "Data",
    "salary": 120000,
    "hire_date": "2020-02-26"
  },
  {
    "employee_id": 347,
    "first_name": "Brian",
    "last_name": "Harris",
    "department": "Sales",
    "salary": 82000,
    "hire_date": "2020-09-18"
  },
  {
    "employee_id": 348,
    "first_name": "David",
    "last_name": "White",
    "department": "IT",
    "salary": 128000,
    "hire_date": "2024-03-15"
  },
  {
    "employee_id": 349,
    "first_name": "Ravi",
    "last_name": "Naidu",
    "department": "QA",
    "salary": 83000,
    "hire_date": "2025-05-01"
  },
  {
    "employee_id": 350,
    "first_name": "Raj",
    "last_name": "Yadav",
    "department": "IT",
    "salary": 106000,
    "hire_date": "2022-07-18"
  },
  {
    "employee_id": 351,
    "first_name": "Mason",
    "last_name": "Brown",
    "department": "Sales",
    "salary": 120000,
    "hire_date": "2023-12-17"
  },
  {
    "employee_id": 352,
    "first_name": "Ava",
    "last_name": "Robinson",
    "department": "IT",
    "salary": 72000,
    "hire_date": "2022-12-12"
  },
  {
    "employee_id": 353,
    "first_name": "David",
    "last_name": "Rodriguez",
    "department": "Design",
    "salary": 89000,
    "hire_date": "2024-01-26"
  },
  {
    "employee_id": 354,
    "first_name": "Sarah",
    "last_name": "Hall",
    "department": "Engineering",
    "salary": 116000,
    "hire_date": "2019-11-11"
  },
  {
    "employee_id": 355,
    "first_name": "Lisa",
    "last_name": "Yadav",
    "department": "IT",
    "salary": 129000,
    "hire_date": "2023-04-24"
  },
  {
    "employee_id": 356,
    "first_name": "Aisha",
    "last_name": "Iyer",
    "department": "Product",
    "salary": 85000,
    "hire_date": "2024-01-17"
  },
  {
    "employee_id": 357,
    "first_name": "Pooja",
    "last_name": "Harris",
    "department": "QA",
    "salary": 75000,
    "hire_date": "2024-05-02"
  },
  {
    "employee_id": 358,
    "first_name": "Laura",
    "last_name": "Williams",
    "department": "Design",
    "salary": 88000,
    "hire_date": "2020-02-28"
  },
  {
    "employee_id": 359,
    "first_name": "Nisha",
    "last_name": "Davis",
    "department": "Operations",
    "salary": 87000,
    "hire_date": "2020-12-07"
  },
  {
    "employee_id": 360,
    "first_name": "Sophia",
    "last_name": "Rao",
    "department": "Engineering",
    "salary": 136000,
    "hire_date": "2023-12-05"
  },
  {
    "employee_id": 361,
    "first_name": "Anita",
    "last_name": "Yadav",
    "department": "Design",
    "salary": 70000,
    "hire_date": "2023-01-30"
  },
  {
    "employee_id": 362,
    "first_name": "Alex",
    "last_name": "Allen",
    "department": "Operations",
    "salary": 81000,
    "hire_date": "2022-10-17"
  },
  {
    "employee_id": 363,
    "first_name": "Sanjay",
    "last_name": "Williams",
    "department": "IT",
    "salary": 107000,
    "hire_date": "2019-09-27"
  },
  {
    "employee_id": 364,
    "first_name": "Tom",
    "last_name": "Iyer",
    "department": "Operations",
    "salary": 98000,
    "hire_date": "2023-05-03"
  },
  {
    "employee_id": 365,
    "first_name": "Brian",
    "last_name": "Shetty",
    "department": "Finance",
    "salary": 147000,
    "hire_date": "2020-09-07"
  },
  {
    "employee_id": 366,
    "first_name": "Lisa",
    "last_name": "Naidu",
    "department": "Operations",
    "salary": 97000,
    "hire_date": "2020-08-02"
  },
  {
    "employee_id": 367,
    "first_name": "Ava",
    "last_name": "Bose",
    "department": "Operations",
    "salary": 99000,
    "hire_date": "2023-05-25"
  },
  {
    "employee_id": 368,
    "first_name": "Sanjay",
    "last_name": "Rao",
    "department": "Sales",
    "salary": 70000,
    "hire_date": "2022-06-22"
  },
  {
    "employee_id": 369,
    "first_name": "Noah",
    "last_name": "Bose",
    "department": "Design",
    "salary": 110000,
    "hire_date": "2022-09-07"
  },
  {
    "employee_id": 370,
    "first_name": "Anil",
    "last_name": "Das",
    "department": "Sales",
    "salary": 127000,
    "hire_date": "2020-01-18"
  },
  {
    "employee_id": 371,
    "first_name": "Anil",
    "last_name": "King",
    "department": "IT",
    "salary": 130000,
    "hire_date": "2023-01-22"
  },
  {
    "employee_id": 372,
    "first_name": "Mia",
    "last_name": "Rodriguez",
    "department": "Engineering",
    "salary": 103000,
    "hire_date": "2021-05-27"
  },
  {
    "employee_id": 373,
    "first_name": "Tanvi",
    "last_name": "Reddy",
    "department": "Operations",
    "salary": 67000,
    "hire_date": "2021-07-16"
  },
  {
    "employee_id": 374,
    "first_name": "Laura",
    "last_name": "Brown",
    "department": "Sales",
    "salary": 97000,
    "hire_date": "2020-02-19"
  },
  {
    "employee_id": 375,
    "first_name": "Tanvi",
    "last_name": "Patel",
    "department": "Design",
    "salary": 113000,
    "hire_date": "2024-11-26"
  },
  {
    "employee_id": 376,
    "first_name": "Anil",
    "last_name": "Lee",
    "department": "Engineering",
    "salary": 159000,
    "hire_date": "2020-06-20"
  },
  {
    "employee_id": 377,
    "first_name": "Noah",
    "last_name": "Thomas",
    "department": "QA",
    "salary": 65000,
    "hire_date": "2021-01-10"
  },
  {
    "employee_id": 378,
    "first_name": "Tanvi",
    "last_name": "Yadav",
    "department": "Data",
    "salary": 111000,
    "hire_date": "2023-11-28"
  },
  {
    "employee_id": 379,
    "first_name": "Liam",
    "last_name": "Hall",
    "department": "Engineering",
    "salary": 110000,
    "hire_date": "2023-12-25"
  },
  {
    "employee_id": 380,
    "first_name": "Alex",
    "last_name": "Chauhan",
    "department": "QA",
    "salary": 102000,
    "hire_date": "2024-01-13"
  },
  {
    "employee_id": 381,
    "first_name": "Rohan",
    "last_name": "Garcia",
    "department": "HR",
    "salary": 69000,
    "hire_date": "2024-04-05"
  },
  {
    "employee_id": 382,
    "first_name": "Mia",
    "last_name": "Mukherjee",
    "department": "HR",
    "salary": 86000,
    "hire_date": "2023-12-10"
  },
  {
    "employee_id": 383,
    "first_name": "Tanvi",
    "last_name": "Clark",
    "department": "Product",
    "salary": 128000,
    "hire_date": "2024-08-21"
  },
  {
    "employee_id": 384,
    "first_name": "Liam",
    "last_name": "Jackson",
    "department": "Design",
    "salary": 112000,
    "hire_date": "2021-03-28"
  },
  {
    "employee_id": 385,
    "first_name": "Robert",
    "last_name": "Martinez",
    "department": "QA",
    "salary": 58000,
    "hire_date": "2024-05-22"
  },
  {
    "employee_id": 386,
    "first_name": "Neha",
    "last_name": "Wilson",
    "department": "Operations",
    "salary": 100000,
    "hire_date": "2024-10-14"
  },
  {
    "employee_id": 387,
    "first_name": "Alex",
    "last_name": "Davis",
    "department": "Marketing",
    "salary": 108000,
    "hire_date": "2020-10-18"
  },
  {
    "employee_id": 388,
    "first_name": "Mason",
    "last_name": "Sharma",
    "department": "Finance",
    "salary": 88000,
    "hire_date": "2023-11-27"
  },
  {
    "employee_id": 389,
    "first_name": "Kevin",
    "last_name": "Wright",
    "department": "Marketing",
    "salary": 116000,
    "hire_date": "2022-12-02"
  },
  {
    "employee_id": 390,
    "first_name": "Liam",
    "last_name": "Williams",
    "department": "Engineering",
    "salary": 130000,
    "hire_date": "2024-08-18"
  },
  {
    "employee_id": 391,
    "first_name": "Sophia",
    "last_name": "Allen",
    "department": "Operations",
    "salary": 60000,
    "hire_date": "2023-03-16"
  },
  {
    "employee_id": 392,
    "first_name": "Jane",
    "last_name": "Lewis",
    "department": "HR",
    "salary": 56000,
    "hire_date": "2022-10-05"
  },
  {
    "employee_id": 393,
    "first_name": "Robert",
    "last_name": "Johnson",
    "department": "Sales",
    "salary": 96000,
    "hire_date": "2024-04-19"
  },
  {
    "employee_id": 394,
    "first_name": "Robert",
    "last_name": "Chauhan",
    "department": "Data",
    "salary": 150000,
    "hire_date": "2024-01-12"
  },
  {
    "employee_id": 395,
    "first_name": "John",
    "last_name": "Davis",
    "department": "QA",
    "salary": 56000,
    "hire_date": "2021-11-14"
  },
  {
    "employee_id": 396,
    "first_name": "Laura",
    "last_name": "Iyer",
    "department": "HR",
    "salary": 88000,
    "hire_date": "2024-12-01"
  },
  {
    "employee_id": 397,
    "first_name": "Emily",
    "last_name": "Singh",
    "department": "Support",
    "salary": 63000,
    "hire_date": "2021-08-31"
  },
  {
    "employee_id": 398,
    "first_name": "Emily",
    "last_name": "Williams",
    "department": "Finance",
    "salary": 100000,
    "hire_date": "2023-09-16"
  },
  {
    "employee_id": 399,
    "first_name": "Isha",
    "last_name": "Lopez",
    "department": "IT",
    "salary": 73000,
    "hire_date": "2020-03-30"
  },
  {
    "employee_id": 400,
    "first_name": "Sanjay",
    "last_name": "Patel",
    "department": "Product",
    "salary": 82000,
    "hire_date": "2024-10-11"
  },
  {
    "employee_id": 401,
    "first_name": "Sophia",
    "last_name": "Rao",
    "department": "QA",
    "salary": 64000,
    "hire_date": "2022-04-08"
  },
  {
    "employee_id": 402,
    "first_name": "John",
    "last_name": "Yadav",
    "department": "Support",
    "salary": 67000,
    "hire_date": "2021-09-12"
  },
  {
    "employee_id": 403,
    "first_name": "Liam",
    "last_name": "White",
    "department": "QA",
    "salary": 97000,
    "hire_date": "2019-12-17"
  },
  {
    "employee_id": 404,
    "first_name": "Mia",
    "last_name": "Brown",
    "department": "Design",
    "salary": 93000,
    "hire_date": "2025-02-06"
  },
  {
    "employee_id": 405,
    "first_name": "Vikram",
    "last_name": "Iyer",
    "department": "Design",
    "salary": 61000,
    "hire_date": "2023-05-19"
  },
  {
    "employee_id": 406,
    "first_name": "Mike",
    "last_name": "Chowdhury",
    "department": "Product",
    "salary": 129000,
    "hire_date": "2023-03-10"
  },
  {
    "employee_id": 407,
    "first_name": "Meera",
    "last_name": "Smith",
    "department": "Finance",
    "salary": 115000,
    "hire_date": "2019-10-04"
  },
  {
    "employee_id": 408,
    "first_name": "Sophia",
    "last_name": "Shetty",
    "department": "Operations",
    "salary": 97000,
    "hire_date": "2020-02-29"
  },
  {
    "employee_id": 409,
    "first_name": "Meera",
    "last_name": "Chauhan",
    "department": "QA",
    "salary": 76000,
    "hire_date": "2020-06-30"
  },
  {
    "employee_id": 410,
    "first_name": "Jacob",
    "last_name": "Patel",
    "department": "Engineering",
    "salary": 123000,
    "hire_date": "2020-12-18"
  },
  {
    "employee_id": 411,
    "first_name": "Harper",
    "last_name": "Das",
    "department": "IT",
    "salary": 126000,
    "hire_date": "2021-01-16"
  },
  {
    "employee_id": 412,
    "first_name": "David",
    "last_name": "Rao",
    "department": "Sales",
    "salary": 118000,
    "hire_date": "2019-06-01"
  },
  {
    "employee_id": 413,
    "first_name": "Chris",
    "last_name": "Johnson",
    "department": "Finance",
    "salary": 95000,
    "hire_date": "2019-06-21"
  },
  {
    "employee_id": 414,
    "first_name": "Ava",
    "last_name": "Sharma",
    "department": "Operations",
    "salary": 80000,
    "hire_date": "2025-02-02"
  },
  {
    "employee_id": 415,
    "first_name": "Brian",
    "last_name": "Johnson",
    "department": "Product",
    "salary": 104000,
    "hire_date": "2022-03-17"
  },
  {
    "employee_id": 416,
    "first_name": "Tanvi",
    "last_name": "Williams",
    "department": "Operations",
    "salary": 110000,
    "hire_date": "2022-09-21"
  },
  {
    "employee_id": 417,
    "first_name": "Emily",
    "last_name": "Hall",
    "department": "Finance",
    "salary": 125000,
    "hire_date": "2023-06-27"
  },
  {
    "employee_id": 418,
    "first_name": "Mason",
    "last_name": "Allen",
    "department": "Data",
    "salary": 133000,
    "hire_date": "2021-02-04"
  },
  {
    "employee_id": 419,
    "first_name": "Vivek",
    "last_name": "Reddy",
    "department": "Product",
    "salary": 127000,
    "hire_date": "2024-10-27"
  },
  {
    "employee_id": 420,
    "first_name": "Lisa",
    "last_name": "Shetty",
    "department": "Finance",
    "salary": 124000,
    "hire_date": "2019-11-20"
  },
  {
    "employee_id": 421,
    "first_name": "Sanjay",
    "last_name": "White",
    "department": "Support",
    "salary": 79000,
    "hire_date": "2022-04-18"
  },
  {
    "employee_id": 422,
    "first_name": "Tom",
    "last_name": "Davis",
    "department": "Operations",
    "salary": 75000,
    "hire_date": "2022-04-25"
  },
  {
    "employee_id": 423,
    "first_name": "Mason",
    "last_name": "Nair",
    "department": "Finance",
    "salary": 124000,
    "hire_date": "2020-11-13"
  },
  {
    "employee_id": 424,
    "first_name": "Mason",
    "last_name": "Walker",
    "department": "Data",
    "salary": 147000,
    "hire_date": "2019-06-23"
  },
  {
    "employee_id": 425,
    "first_name": "Jacob",
    "last_name": "Yadav",
    "department": "Data",
    "salary": 145000,
    "hire_date": "2022-01-29"
  },
  {
    "employee_id": 426,
    "first_name": "Sarah",
    "last_name": "Brown",
    "department": "IT",
    "salary": 116000,
    "hire_date": "2023-01-28"
  },
  {
    "employee_id": 427,
    "first_name": "Meera",
    "last_name": "Mukherjee",
    "department": "Design",
    "salary": 70000,
    "hire_date": "2019-05-08"
  },
  {
    "employee_id": 428,
    "first_name": "Sanjay",
    "last_name": "Mukherjee",
    "department": "Sales",
    "salary": 116000,
    "hire_date": "2019-05-23"
  },
  {
    "employee_id": 429,
    "first_name": "David",
    "last_name": "Garcia",
    "department": "Sales",
    "salary": 106000,
    "hire_date": "2023-01-23"
  },
  {
    "employee_id": 430,
    "first_name": "Karan",
    "last_name": "Johnson",
    "department": "Support",
    "salary": 83000,
    "hire_date": "2020-09-20"
  },
  {
    "employee_id": 431,
    "first_name": "Mason",
    "last_name": "Hall",
    "department": "IT",
    "salary": 112000,
    "hire_date": "2023-12-24"
  },
  {
    "employee_id": 432,
    "first_name": "Karan",
    "last_name": "Anderson",
    "department": "Marketing",
    "salary": 93000,
    "hire_date": "2023-02-12"
  },
  {
    "employee_id": 433,
    "first_name": "Ethan",
    "last_name": "Bose",
    "department": "Support",
    "salary": 62000,
    "hire_date": "2021-10-19"
  },
  {
    "employee_id": 434,
    "first_name": "Jane",
    "last_name": "Pillai",
    "department": "Marketing",
    "salary": 71000,
    "hire_date": "2024-08-06"
  },
  {
    "employee_id": 435,
    "first_name": "Noah",
    "last_name": "Iyer",
    "department": "Design",
    "salary": 67000,
    "hire_date": "2021-12-08"
  },
  {
    "employee_id": 436,
    "first_name": "Nisha",
    "last_name": "Wright",
    "department": "Finance",
    "salary": 97000,
    "hire_date": "2022-03-15"
  },
  {
    "employee_id": 437,
    "first_name": "Priya",
    "last_name": "Harris",
    "department": "Data",
    "salary": 105000,
    "hire_date": "2020-07-09"
  },
  {
    "employee_id": 438,
    "first_name": "Mason",
    "last_name": "White",
    "department": "Marketing",
    "salary": 117000,
    "hire_date": "2023-12-29"
  },
  {
    "employee_id": 439,
    "first_name": "Kavya",
    "last_name": "Lewis",
    "department": "Marketing",
    "salary": 102000,
    "hire_date": "2022-11-24"
  },
  {
    "employee_id": 440,
    "first_name": "David",
    "last_name": "Iyer",
    "department": "Data",
    "salary": 159000,
    "hire_date": "2022-04-04"
  },
  {
    "employee_id": 441,
    "first_name": "Daniel",
    "last_name": "Rao",
    "department": "Finance",
    "salary": 92000,
    "hire_date": "2023-01-20"
  },
  {
    "employee_id": 442,
    "first_name": "Kevin",
    "last_name": "Taylor",
    "department": "Design",
    "salary": 72000,
    "hire_date": "2020-07-22"
  },
  {
    "employee_id": 443,
    "first_name": "Priya",
    "last_name": "Smith",
    "department": "HR",
    "salary": 73000,
    "hire_date": "2025-03-19"
  },
  {
    "employee_id": 444,
    "first_name": "Mia",
    "last_name": "Lopez",
    "department": "QA",
    "salary": 106000,
    "hire_date": "2025-03-09"
  },
  {
    "employee_id": 445,
    "first_name": "Isha",
    "last_name": "Davis",
    "department": "Sales",
    "salary": 68000,
    "hire_date": "2022-06-20"
  },
  {
    "employee_id": 446,
    "first_name": "Nisha",
    "last_name": "Shetty",
    "department": "Support",
    "salary": 75000,
    "hire_date": "2024-11-23"
  },
  {
    "employee_id": 447,
    "first_name": "Tanvi",
    "last_name": "Hernandez",
    "department": "Support",
    "salary": 81000,
    "hire_date": "2019-10-30"
  },
  {
    "employee_id": 448,
    "first_name": "Ethan",
    "last_name": "Bose",
    "department": "Sales",
    "salary": 69000,
    "hire_date": "2024-01-18"
  },
  {
    "employee_id": 449,
    "first_name": "Kavya",
    "last_name": "Gupta",
    "department": "Product",
    "salary": 124000,
    "hire_date": "2020-06-09"
  },
  {
    "employee_id": 450,
    "first_name": "Raj",
    "last_name": "Naidu",
    "department": "Design",
    "salary": 71000,
    "hire_date": "2020-06-12"
  },
  {
    "employee_id": 451,
    "first_name": "Vikram",
    "last_name": "Williams",
    "department": "Support",
    "salary": 52000,
    "hire_date": "2024-10-23"
  },
  {
    "employee_id": 452,
    "first_name": "Ava",
    "last_name": "Jackson",
    "department": "Sales",
    "salary": 80000,
    "hire_date": "2022-08-14"
  },
  {
    "employee_id": 453,
    "first_name": "Kevin",
    "last_name": "Walker",
    "department": "Data",
    "salary": 156000,
    "hire_date": "2022-03-09"
  },
  {
    "employee_id": 454,
    "first_name": "Brian",
    "last_name": "Harris",
    "department": "Marketing",
    "salary": 100000,
    "hire_date": "2025-03-06"
  },
  {
    "employee_id": 455,
    "first_name": "Robert",
    "last_name": "Chowdhury",
    "department": "Finance",
    "salary": 108000,
    "hire_date": "2024-12-25"
  },
  {
    "employee_id": 456,
    "first_name": "Vikram",
    "last_name": "Bose",
    "department": "Marketing",
    "salary": 70000,
    "hire_date": "2025-08-21"
  },
  {
    "employee_id": 457,
    "first_name": "Laura",
    "last_name": "Jackson",
    "department": "QA",
    "salary": 97000,
    "hire_date": "2022-10-14"
  },
  {
    "employee_id": 458,
    "first_name": "Mike",
    "last_name": "Smith",
    "department": "QA",
    "salary": 60000,
    "hire_date": "2019-07-06"
  },
  {
    "employee_id": 459,
    "first_name": "Tanvi",
    "last_name": "Verma",
    "department": "IT",
    "salary": 98000,
    "hire_date": "2021-05-13"
  },
  {
    "employee_id": 460,
    "first_name": "Liam",
    "last_name": "Yadav",
    "department": "QA",
    "salary": 95000,
    "hire_date": "2019-05-05"
  },
  {
    "employee_id": 461,
    "first_name": "Raj",
    "last_name": "Patel",
    "department": "Product",
    "salary": 117000,
    "hire_date": "2022-05-22"
  },
  {
    "employee_id": 462,
    "first_name": "Sophia",
    "last_name": "Mukherjee",
    "department": "Product",
    "salary": 131000,
    "hire_date": "2022-05-03"
  },
  {
    "employee_id": 463,
    "first_name": "David",
    "last_name": "Das",
    "department": "Product",
    "salary": 87000,
    "hire_date": "2020-10-09"
  },
  {
    "employee_id": 464,
    "first_name": "Liam",
    "last_name": "Kumar",
    "department": "Product",
    "salary": 139000,
    "hire_date": "2021-04-15"
  },
  {
    "employee_id": 465,
    "first_name": "Sanjay",
    "last_name": "Thomas",
    "department": "Operations",
    "salary": 75000,
    "hire_date": "2022-07-31"
  },
  {
    "employee_id": 466,
    "first_name": "Jacob",
    "last_name": "Young",
    "department": "Data",
    "salary": 106000,
    "hire_date": "2023-02-26"
  },
  {
    "employee_id": 467,
    "first_name": "Neha",
    "last_name": "Wilson",
    "department": "Design",
    "salary": 80000,
    "hire_date": "2021-09-17"
  },
  {
    "employee_id": 468,
    "first_name": "Emily",
    "last_name": "Robinson",
    "department": "Product",
    "salary": 137000,
    "hire_date": "2021-10-12"
  },
  {
    "employee_id": 469,
    "first_name": "Tom",
    "last_name": "Williams",
    "department": "Sales",
    "salary": 97000,
    "hire_date": "2023-04-23"
  },
  {
    "employee_id": 470,
    "first_name": "Liam",
    "last_name": "Garcia",
    "department": "QA",
    "salary": 110000,
    "hire_date": "2020-10-16"
  },
  {
    "employee_id": 471,
    "first_name": "Karan",
    "last_name": "Shetty",
    "department": "Operations",
    "salary": 75000,
    "hire_date": "2021-02-16"
  },
  {
    "employee_id": 472,
    "first_name": "Priya",
    "last_name": "Sharma",
    "department": "Sales",
    "salary": 119000,
    "hire_date": "2024-08-04"
  },
  {
    "employee_id": 473,
    "first_name": "Priya",
    "last_name": "Smith",
    "department": "Finance",
    "salary": 81000,
    "hire_date": "2023-05-30"
  },
  {
    "employee_id": 474,
    "first_name": "Harper",
    "last_name": "Garcia",
    "department": "Design",
    "salary": 73000,
    "hire_date": "2025-07-17"
  },
  {
    "employee_id": 475,
    "first_name": "Sarah",
    "last_name": "Williams",
    "department": "Operations",
    "salary": 73000,
    "hire_date": "2024-07-20"
  },
  {
    "employee_id": 476,
    "first_name": "Pooja",
    "last_name": "Mukherjee",
    "department": "QA",
    "salary": 85000,
    "hire_date": "2022-03-16"
  },
  {
    "employee_id": 477,
    "first_name": "John",
    "last_name": "Wilson",
    "department": "Design",
    "salary": 87000,
    "hire_date": "2020-07-02"
  },
  {
    "employee_id": 478,
    "first_name": "Kiran",
    "last_name": "Hall",
    "department": "Finance",
    "salary": 121000,
    "hire_date": "2023-02-07"
  },
  {
    "employee_id": 479,
    "first_name": "Charlotte",
    "last_name": "Williams",
    "department": "Engineering",
    "salary": 152000,
    "hire_date": "2025-04-20"
  },
  {
    "employee_id": 480,
    "first_name": "Mia",
    "last_name": "Iyer",
    "department": "HR",
    "salary": 68000,
    "hire_date": "2019-10-29"
  },
  {
    "employee_id": 481,
    "first_name": "Vikram",
    "last_name": "Wright",
    "department": "Support",
    "salary": 80000,
    "hire_date": "2022-02-19"
  },
  {
    "employee_id": 482,
    "first_name": "Kavya",
    "last_name": "Yadav",
    "department": "QA",
    "salary": 62000,
    "hire_date": "2020-06-11"
  },
  {
    "employee_id": 483,
    "first_name": "Charlotte",
    "last_name": "Hall",
    "department": "Marketing",
    "salary": 110000,
    "hire_date": "2022-10-20"
  },
  {
    "employee_id": 484,
    "first_name": "Mia",
    "last_name": "Chauhan",
    "department": "Design",
    "salary": 69000,
    "hire_date": "2021-03-26"
  },
  {
    "employee_id": 485,
    "first_name": "Vikram",
    "last_name": "Young",
    "department": "QA",
    "salary": 87000,
    "hire_date": "2019-06-14"
  },
  {
    "employee_id": 486,
    "first_name": "Mike",
    "last_name": "Anderson",
    "department": "Engineering",
    "salary": 122000,
    "hire_date": "2024-04-24"
  },
  {
    "employee_id": 487,
    "first_name": "Harper",
    "last_name": "Thomas",
    "department": "Design",
    "salary": 98000,
    "hire_date": "2024-10-12"
  },
  {
    "employee_id": 488,
    "first_name": "Ethan",
    "last_name": "Yadav",
    "department": "Sales",
    "salary": 100000,
    "hire_date": "2020-10-27"
  },
  {
    "employee_id": 489,
    "first_name": "Isha",
    "last_name": "Pillai",
    "department": "Support",
    "salary": 64000,
    "hire_date": "2025-08-28"
  },
  {
    "employee_id": 490,
    "first_name": "Vikram",
    "last_name": "Sharma",
    "department": "Operations",
    "salary": 89000,
    "hire_date": "2024-06-29"
  },
  {
    "employee_id": 491,
    "first_name": "Karan",
    "last_name": "Rodriguez",
    "department": "Data",
    "salary": 150000,
    "hire_date": "2019-03-10"
  },
  {
    "employee_id": 492,
    "first_name": "Isabella",
    "last_name": "Mukherjee",
    "department": "Operations",
    "salary": 62000,
    "hire_date": "2023-09-03"
  },
  {
    "employee_id": 493,
    "first_name": "Ava",
    "last_name": "Shetty",
    "department": "QA",
    "salary": 110000,
    "hire_date": "2019-04-20"
  },
  {
    "employee_id": 494,
    "first_name": "Arjun",
    "last_name": "Martinez",
    "department": "QA",
    "salary": 96000,
    "hire_date": "2025-06-27"
  },
  {
    "employee_id": 495,
    "first_name": "Kevin",
    "last_name": "Shetty",
    "department": "QA",
    "salary": 58000,
    "hire_date": "2025-07-18"
  },
  {
    "employee_id": 496,
    "first_name": "Daniel",
    "last_name": "Gupta",
    "department": "Product",
    "salary": 128000,
    "hire_date": "2020-08-28"
  },
  {
    "employee_id": 497,
    "first_name": "Sophia",
    "last_name": "Johnson",
    "department": "IT",
    "salary": 79000,
    "hire_date": "2021-02-20"
  },
  {
    "employee_id": 498,
    "first_name": "Mason",
    "last_name": "Lewis",
    "department": "Engineering",
    "salary": 133000,
    "hire_date": "2020-09-12"
  },
  {
    "employee_id": 499,
    "first_name": "Vivek",
    "last_name": "Martin",
    "department": "Support",
    "salary": 71000,
    "hire_date": "2024-08-17"
  },
  {
    "employee_id": 500,
    "first_name": "Arjun",
    "last_name": "Pillai",
    "department": "QA",
    "salary": 101000,
    "hire_date": "2019-09-13"
  }
];


const SAMPLE_QUERIES = [
{
title: "All Employees",
tag: "Basic",
sql: "SELECT * FROM employees ORDER BY employee_id;",
},
{
title: "High Salary Employees",
tag: "Filtering",
sql: "SELECT employee_id, first_name, last_name, salary, department FROM employees WHERE salary > 75000 ORDER BY salary DESC;",
},
{
title: "Department Sales Summary",
tag: "Aggregation",
sql: "SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary FROM employees GROUP BY department ORDER BY department;",
},
{
title: "Recent Hires (last 30 days)",
tag: "Date Filtering",
sql: "SELECT employee_id, first_name, last_name, hire_date FROM employees WHERE hire_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY) ORDER BY hire_date DESC;",
},
];

export { EMPLOYEES, SAMPLE_QUERIES };