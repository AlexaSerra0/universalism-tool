import {Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, PageBreak} 
from 'docx';
import { saveAs } from 'file-saver';

const exportToWord = (documentName, author, participants, selectedConcepts, selectedQuestions) => {
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
                    ...selectedConcepts.map((concept, index) => [
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
                        new Paragraph({}),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Description: `,
                                    bold: true,
                                    size: 24,
                                }),
                            ],
                            spacing: { before: 100, after: 100 },
                        }),
                        ...concept.description.map((description) => 
                            new Paragraph({
                                children: [
                                        new TextRun({
                                        text: description.text,
                                        size: 24,
                                    })
                                ],
                                spacing: { before: 100, after: 100 },
                            }),
                        ),
                        ...selectedQuestions.filter((q) => q.concept === concept.concept).map((q) => [
                            new Paragraph({size: 26,}),
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `Question: `,
                                        bold: true,
                                        size: 24,
                                    }),
                                ],
                                spacing: { before: 100, after: 100 },
                            }),
                            new Paragraph({
                                children: [
                                        new TextRun({
                                        text: q.question,
                                        size: 24,
                                    })
                                ],
                                spacing: { before: 100, after: 100 },
                            }),
                            ...participants.map((participant, i) => new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `Answer ${participant}: `,
                                        size: 24,
                                    }),
                                    new Paragraph({ }),
                                   
                                ],
                                spacing: { before: 200, after: 100 },
                            })),
                        ]).flat(),
                        ...(index < selectedConcepts.length - 1 ? [
                            new Paragraph({ 
                                children: [new PageBreak()] 
                            })] : []),
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
