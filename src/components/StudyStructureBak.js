import React, { useState, useEffect } from 'react';

export default function StudyStructure() {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [programs, setPrograms] = useState([]);
    const [specialtyDescriptions, setSpecialtyDescriptions] = useState({});

    const toggleProgram = (programIndex) => {
        if (selectedProgram === programIndex) {
            setSelectedProgram(null);
        } else {
            setSelectedProgram(programIndex);
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

    useEffect(() => {
        fetch('http://192.168.10.105:8000/BakiData') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при получении данных');
                }
                return response.json();
            })
            .then(data => {
                setPrograms(data.programs);
                setSpecialtyDescriptions(data.specialtyDescriptions);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);

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

