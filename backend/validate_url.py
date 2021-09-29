from urllib.parse import urlparse

import validators


def validate_url(submittedUrl: str):
    return validators.url(submittedUrl)
