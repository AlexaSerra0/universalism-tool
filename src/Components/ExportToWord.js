import {Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, HeadingLevel} 
from 'docx';
import { saveAs } from 'file-saver';

const exportToWord = (documentName, author, participants, selectedConcepts, selectedQuestions) => {
    const createTable = (questions) => {
        return new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children: [new TextRun({ text: "Questions", size: 24, bold: true })],
                                spacing: { before: 100, after: 100 },
                            })],
                            width: { size: 50, type: WidthType.PERCENTAGE },
                            
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [new TextRun({ text: "Remind Participants", size: 24, bold: true })],
                                spacing: { before: 100, after: 100 },
                            })],
                            width: { size: 50, type: WidthType.PERCENTAGE },
                        }),
                    ],
                }),
                ...questions.map((q) => {
                    return new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    children: [new TextRun({ text: q.question, size: 24})],
                                    spacing: { before: 100, after: 100 },
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({ text: "", size: 24 })],
                                spacing: { before: 100, after: 100 },
                            }),
                        ],
                    });
                }),
            ],
            width: { size: 100, type: WidthType.PERCENTAGE },
        });
    };

    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: "Universalism Requirements Document",
                                bold: true,
                                size: 32,
                            }),
                        ],
                    }),
                    new Paragraph({
                        text: `Project Name: ${documentName}`,
                        heading: HeadingLevel.HEADING_1,
                        spacing: { before: 400, after: 200 },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Author: `,
                                bold: true,
                                size: 24,
                            }),
                            new TextRun({
                                text: `${author}`,
                                size: 24,
                            })
                        ],
                        spacing: { before: 200, after: 200 },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Participants: `,
                                bold: true,
                                size: 24,
                            })
                        ],
                        spacing: { before: 200, after: 100 },
                    }),
                    ...participants.map((participant) => new Paragraph({
                        children: [
                            new TextRun({
                                text: `- ${participant}`,
                                size: 24,
                            })
                        ],
                        spacing: { before: 200, after: 100 },
                    })),
                    new Paragraph({
                        text: `Selected Concepts: `,
                        heading: HeadingLevel.HEADING_1,
                        spacing: { before: 400, after: 200 },
                    }),
                    ...selectedConcepts.map((concept) => [
                         new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${concept.concept}:`,
                                    size: 28,
                                })
                            ],
                            heading: HeadingLevel.HEADING_2,
                            spacing: { before: 200, after: 100 },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Description: `,
                                    bold: true,
                                    size: 24,
                                }),
                                new TextRun({
                                    text: `${concept.description}`,
                                    size: 24,
                                })
                            ],
                            spacing: { before: 100, after: 100 },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Requirement Example: `,
                                    bold: true,
                                    size: 24,
                                }),
                                new TextRun({
                                    text: `${concept.requirement}`,
                                    size: 24,
                                })
                            ],
                            spacing: { before: 100, after: 100 },
                        }),
                        new Paragraph({}),
                        createTable(
                            selectedQuestions.filter((q) => q.concept === concept.concept)
                        ),
                        new Paragraph({}),
                    ]).flat(),
                ],
            },
        ],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, `${documentName}.docx`);
    });
};

export { exportToWord };
