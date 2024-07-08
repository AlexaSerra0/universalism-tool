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
                                children: [new TextRun({ text: "Questions", bold: true })],
                            })],
                            width: { size: 50, type: WidthType.PERCENTAGE },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [new TextRun({ text: "Remind Participants", bold: true })],
                            })],
                            width: { size: 50, type: WidthType.PERCENTAGE },
                        }),
                    ],
                }),
                ...questions.map((q) => {
                    return new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({ text: q.question })],
                            }),
                            new TableCell({
                                children: [new Paragraph({ text: "" })],
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
                                text: `Author: ${author}`,
                                bold: true,
                            })
                        ],
                        spacing: { before: 200, after: 200 },
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Participants:`,
                                bold: true,
                            })
                        ],
                        spacing: { before: 200, after: 100 },
                    }),
                    ...participants.map((participant) => new Paragraph({ text: `- ${participant}` })),
                    new Paragraph({
                        text: `Selected Concepts:`,
                        heading: HeadingLevel.HEADING_1,
                        spacing: { before: 400, after: 200 },
                    }),
                    ...selectedConcepts.map((concept) => [
                        new Paragraph({
                            text: `${concept.concept}:`,
                            heading: HeadingLevel.HEADING_2,
                            spacing: { before: 200, after: 200 },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Description: ${concept.description}`,
                                    bold: true,
                                })
                            ],
                            spacing: { before: 100, after: 100 },
                        }),
                        createTable(
                            selectedQuestions.filter((q) => q.concept === concept.concept)
                        ),
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
