from django.urls import path

from .views import NoteDelete, NoteListCreate

urlpatterns = [
    path('notes/', view=NoteListCreate.as_view(), name='note-list'),
    path('notes/delete/<int:pk>/', view=NoteDelete.as_view(), name='delete-note')
]
