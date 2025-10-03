"""
Educational Chatbot Tools Package

This package provides educational tools for the AI agent.
"""

from .search_courses import search_courses, SEARCH_COURSES_SCHEMA
from .generate_quiz import generate_quiz, GENERATE_QUIZ_SCHEMA
from .explain_concept import explain_concept, EXPLAIN_CONCEPT_SCHEMA

TOOLS_DEFINITIONS = [
    {
        "name": "search_courses",
        "function": search_courses,
        "schema": SEARCH_COURSES_SCHEMA,
    },
    {
        "name": "generate_quiz",
        "function": generate_quiz,
        "schema": GENERATE_QUIZ_SCHEMA,
    },
    {
        "name": "explain_concept",
        "function": explain_concept,
        "schema": EXPLAIN_CONCEPT_SCHEMA,
    },
]

TOOLS_SCHEMAS = [
    tool_definition["schema"]
    for tool_definition in TOOLS_DEFINITIONS
]

TOOLS_FUNCTIONS = {
    tool_definition["name"]: tool_definition["function"]
    for tool_definition in TOOLS_DEFINITIONS
}
