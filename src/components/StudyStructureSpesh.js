import React, { useState } from 'react';

export default function StudyStructure() {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);

    const toggleProgram = (program) => {
        if (selectedProgram === program) {
            setSelectedProgram(null);
        } else {
            setSelectedProgram(program);
            setSelectedSpecialty(null);
        }
    };

    const toggleSpecialty = (specialty) => {
        if (selectedSpecialty === specialty) {
            setSelectedSpecialty(null);
        } else {
            setSelectedSpecialty(specialty);
        }
    };
    const programs = [
        {
            title: 'СПЕЦИАЛИТЕТ',
            specialties: [
                '38.05.01 Экономическая безопасность - русский язык, математика, обществознание ',
            ],
        },

    ];

    const specialtyDescriptions = {
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
        ' - Электронная коммерция и интернет-маркетинг',
};
    const getSpecialtyDescription = (specialty) => {
        return 'Описание специальности: ' + specialtyDescriptions[specialty];
    };
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Информация об учебной структуре</h3>
            <p style={{ textAlign: 'center' }}>На факультете реализуются следующие образовательные программы:</p>

            {programs.map((program, index) => (
                <div
                    key={index}
                    style={{
                        marginBottom: '20px',
                        padding: '10px',
                        border: '1px solid #ccc',
                        cursor: 'pointer',
                    }}
                    onClick={() => toggleProgram(index)}
                >
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{program.title}</h4>
                    {selectedProgram === index && (
                        <div style={{ marginTop: '10px' }}>
                            {program.specialties.map((specialty, specialtyIndex) => (
                                <div
                                    key={specialtyIndex}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSpecialty(specialty);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {specialty}
                                    {selectedSpecialty === specialty && (
                                       <div style={{ marginLeft: '15px', marginTop: '5px', whiteSpace: 'pre-line' }}>
                                       {getSpecialtyDescription(specialty)}
                                   </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

