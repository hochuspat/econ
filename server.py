from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
#http://192.168.10.105:8000/docs#/
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

school_data = {
    "title": "Подготовка к олимпиаде по экономике",
    "description": "Программа для школьников 10-11 классов...",
    "imageUrl": "/IIWV8jeAhXg.jpg",
    "imageAlt": "Young Entrepreneurs School",
}

textArray = {
    "title": 'Школа выходного дня "Экономист1"',
    "description": 'Программа для школьников 10-11 классов, которые хотят получить базовые знания по экономике, математике и статистике, а также подготовиться к вступительным экзаменам в вузы.',
    "imageUrl": '/IIWV8jeAhXg.jpg',
    "imageAlt": 'Young Entrepreneurs School',
  }

textArray1 = {
   "title": 'Школа выходного дня "Экономист"',
    "description": 'Программа для школьников 10-11 классов, которые хотят получить базовые знания по экономике, математике и статистике, а также подготовиться к вступительным экзаменам в вузы.',
    "imageUrl": '/IIWV8jeAhXg.jpg',
    "imageAlt": 'Young Entrepreneurs School',
  }


textArray2 = {
    "title": 'Школа финансовой грамотности',
    "description": 'Программа для школьников 8-11 классов, которые хотят научиться управлять своими финансами, планировать бюджет, инвестировать и экономить.',
    "imageUrl": '/IIWV8jeAhXg.jpg',
    "imageAlt": 'Young Entrepreneurs School',
  }

textArray3 = {
     "title": 'Школа молодого предпринимателя',
    "description": 'Программа для школьников 9-11 классов, которые хотят научиться создавать свой бизнес, развивать свои идеи и получать практические навыки в области экономики и предпринимательства.',
    "imageUrl": '/IIWV8jeAhXg.jpg',
    "imageAlt": 'Young Entrepreneurs School',
  }

textArray4 = {
  "title":'Экономический факультет КубГУ предлагает школьникам различные программы и мероприятия, которые помогут им узнать больше об экономике, развить свои навыки и подготовиться к поступлению.',
}

Baki={
    "title":'Здесь вы можете найти информацию о бакалаврских программах нашего университета.',
    "imageUrl": '/istor.jpg',
}

BakiURL={
    "iframeSrc":'https://docs.google.com/spreadsheets/d/1ZYpgqXqFcTX1MaH1yqYKCA0fpLRqX3s5/edit?usp=sharing&ouid=101680318929450196642&rtpof=true&sd=true'
}



BakiData = {
    "programs": [
        {
            "title": "БАКАЛАВРИАТ",
            "specialties": [
                '38.03.01 Экономика - русский язык, математика, обществознание',
                '38.03.02 Менеджмент - русский язык, математика, обществознание',
                '38.03.05 Бизнес-информатика - русский язык, математика, обществознание',
                '38.03.06 Торговое дело - русский язык, математика, обществознание',
                '27.03.03 Системный анализ и управление - русский язык, математика, физика/информатика и ИКТ',
                '27.03.05 Инноватика - русский язык, математика, физика/информатика и ИКТ'                # ... остальные специальности
            ]
        },
    ],
    "specialtyDescriptions": {
'38.03.01 Экономика - русский язык, математика, обществознание':
            'Эта специальность обучает студентов основам экономики, а также развивает навыки анализа данных и общественного взаимодействия.\n' +
            'Направленность (профили):\n' +
            ' - Бухгалтерский учет и аудит\n' +
            ' - Мировая экономика и коммерция\n' +
            ' - Финансы и кредит\n' +
            ' - Экономика предприятий и организаций',
        '38.03.02 Менеджмент - русский язык, математика, обществознание':
        'Эта специальность обучает студентов основам экономики, а также развивает навыки анализа данных и общественного взаимодействия.\n' +
        'Направленность (профили):\n' +
        ' - Международный менеджмент\n' +
        ' - Управление малым бизнесом\n' +
        ' - Финансовый менеджмент',
        '38.03.05 Бизнес-информатика - русский язык, математика, обществознание':
        'Эта специальность обучает студентов основам экономики, а также развивает навыки анализа данных и общественного взаимодействия.\n' +
        'Направленность (профили):\n' +
        ' - Бизнес в цифровой экономике',
        '38.03.06 Торговое дело - русский язык, математика, обществознание':
        'Эта специальность обучает студентов основам экономики, а также развивает навыки анализа данных и общественного взаимодействия.\n' +
        'Направленность (профили):\n' +
        ' - Электронная коммерция и интернет-маркетинг',        # ... остальные описания
    }
}

tips_data = {
    "tips": [
        "Начните подготовку заранее. Определите даты вступительных испытаний и дедлайны подачи документов и разработайте план подготовки, учитывая необходимое время для изучения материала.",
        "Изучите требования к поступлению. Тщательно ознакомьтесь с требованиями к вступительным испытаниям, списком необходимых документов и другой важной информацией.",
        "Планируйте свое время. Создайте расписание, которое включает время для изучения предметов, подготовки к тестам, выполнения заданий и отдыха. Соблюдение режима поможет избежать стресса и переутомления.",
    ]
}

internationalPartners = {
    "internationalPartners": [
        {
            "name": "Партнер 1",
            "description": "Описание партнера 1.",
            "imageUrl": "/avet.jpg",
            "websiteUrl": "https://www.partner1.com/",
        },
        {
            "name": "Партнер 2",
            "description": "Описание партнера 2.",
            "imageUrl": "/avet.jpg",
            "websiteUrl": "https://www.partner2.com/",
        },
    ]
}
departments = {
    'marketing': {
        'facultyMembers': [
            {
                'name': 'Аветисян Наталья Николаевна',
                'photo': '/avet.jpg',
                'portfolioLink': 'https://www.kubsu.ru/ru/public-portfolio/11934',
            },
        ],
        'studentEvents': [
            {
                'image': '/avet.jpg',
                'text': 'Описание первого мероприятия...',
            },
            {
                'image': '/event2.jpg',
                'text': 'Описание второго мероприятия...',
            },
        ],
        'aboutDepartmentText': [
            "Кафедра маркетинга и торгового дела была создана в 1998 году...",
        ],
        'facultyHeadText': [
            {
                'text': "Заведующий кафедрой маркетинга и торгового дела — Смирнов Алексей Александрович...",
                'imagePath': "/head-of-department.jpg",
            },
        ],
        'teachersText': [
            "На кафедре работает высококвалифицированный преподавательский состав, состоящий из 25 человек...",
        ],
        'educationalProcessText': [
            "Кафедра маркетинга и торгового дела предлагает студентам современную и практико-ориентированную программу обучения...",
        ],
        'scientificActivitiesText': [
            "Кафедра маркетинга и торгового дела является одним из ведущих научных центров...",
        ],
        'contactsText': {
            "address": "Адрес кафедры: 119991, г. Москва, ул. Ленинские горы, д. 1, стр. 46, ауд. 321.",
            "phone": "Телефон: +7 (495) 939-28-83",
            "email": "E-mail: marketing@econ.msu.ru",
        },
    },
    'other_department': {
        'facultyMembers': [
            {
                'name': 'Иванов Иван Иванович',
                'photo': '/ivanov.jpg',
                'portfolioLink': 'https://www.example.com/ivanov',
            },
        ],
        'studentEvents': [
            {
                'image': '/event3.jpg',
                'text': 'Описание третьего мероприятия...',
            },
            {
                'image': '/event4.jpg',
                'text': 'Описание четвертого мероприятия...',
            },
        ],
        'aboutDepartmentText': [
            "Кафедра другой специальности была создана...",
        ],
        'facultyHeadText': [
            {
                'text': "Заведующий кафедрой другой специальности — Петров Петр Петрович...",
                'imagePath': "/head-of-department-2.jpg",
            },
        ],
        'teachersText': [
            "На кафедре работает высококвалифицированный преподавательский состав...",
        ],
        'educationalProcessText': [
            "Кафедра другой специальности предлагает студентам программу обучения...",
        ],
        'scientificActivitiesText': [
            "Кафедра другой специальности активно участвует в научных исследованиях...",
        ],
        'contactsText': {
            "address": "Адрес кафедры: 123456, г. Примерный, ул. Улица, д. 2, стр. 22, ауд. 123.",
            "phone": "Телефон: +7 (123) 456-78-90",
            "email": "E-mail: example@university.edu",
        },
    },
}

@app.get("/facultyMembers/{department}", response_class=JSONResponse)
async def get_facultyMembers(department: str):
    return JSONResponse(content=departments[department]['facultyMembers'])

@app.get("/studentEvents/{department}", response_class=JSONResponse)
async def get_studentEvents(department: str):
    return JSONResponse(content=departments[department]['studentEvents'])

@app.get("/aboutDepartmentText/{department}", response_class=JSONResponse)
async def get_aboutDepartmentText(department: str):
    return JSONResponse(content=departments[department]['aboutDepartmentText'])

@app.get("/facultyHeadText/{department}", response_class=JSONResponse)
async def get_facultyHeadText(department: str):
    return JSONResponse(content=departments[department]['facultyHeadText'])

@app.get("/teachersText/{department}", response_class=JSONResponse)
async def get_teachersText(department: str):
    return JSONResponse(content=departments[department]['teachersText'])

@app.get("/educationalProcessText/{department}", response_class=JSONResponse)
async def get_educationalProcessText(department: str):
    return JSONResponse(content=departments[department]['educationalProcessText'])

@app.get("/scientificActivitiesText/{department}", response_class=JSONResponse)
async def get_scientificActivitiesText(department: str):
    return JSONResponse(content=departments[department]['scientificActivitiesText'])

@app.get("/contactsText/{department}", response_class=JSONResponse)
async def get_contactsText(department: str):
    return JSONResponse(content=departments[department]['contactsText'])

@app.get("/departments", response_class=JSONResponse)
async def get_departments():
    return JSONResponse(content=list(departments.keys()))













@app.get("/internationalPartners", response_class=JSONResponse) 
async def get_internationalPartners():
    return JSONResponse(content=internationalPartners)



@app.get("/school_data", response_class=JSONResponse) 
async def get_school_data():
    return JSONResponse(content=school_data)


@app.get("/textArray", response_class=JSONResponse) 
async def get_textArray():
    return JSONResponse(content=textArray)

@app.get("/textArray1", response_class=JSONResponse) 
async def get_textArray1():
    return JSONResponse(content=textArray1)

@app.get("/textArray2", response_class=JSONResponse) 
async def get_textArray2():
    return JSONResponse(content=textArray2)


@app.get("/textArray3", response_class=JSONResponse) 
async def get_textArray3():
    return JSONResponse(content=textArray3)

#abitur
@app.get("/textArray4", response_class=JSONResponse) 
async def get_textArray4():
    return JSONResponse(content=textArray4)

@app.get("/Baki", response_class=JSONResponse) 
async def get_Baki():
    return JSONResponse(content=Baki)


@app.get("/BakiURL", response_class=JSONResponse) 
async def get_BakiURL():
    return JSONResponse(content=BakiURL)


@app.get("/BakiData", response_class=JSONResponse) 
async def get_BakiData():
    return JSONResponse(content=BakiData)


@app.get("/tips_data", response_class=JSONResponse) 
async def get_tips_data():
    return JSONResponse(content=tips_data)





















@app.get("/")
async def root():
    return {"message": "Welcome to FastAPI"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
