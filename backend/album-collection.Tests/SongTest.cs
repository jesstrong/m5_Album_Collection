using album_collection.Models;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace album_collection.Tests
{
    public class SongTest
    {
        Song sut;

        public  SongTest()
        {
            sut = new Song();
            sut.Id = 1;
            sut.Title = "Don't Stop Believin";
            sut.Duration = 234;
        }

        [Fact]
        public void Song_Sets_Id_On_SongModel()
        {
            // Arrange

            // Act
            int id = sut.Id;

            // Assert
            Assert.Equal(1, id);
        }

        [Fact]
        public void Song_Sets_Title_On_SongModel()
        {
            // Arrange

            // Act
            string title  = sut.Title;

            // Assert
            Assert.Equal("Don't Stop Believin", title);
        }

        [Fact]
        public void Song_Sets_Duration_On_SongModel()
        {
            // Arrange

            // Act
            int duration = sut.Duration;

            // Assert
            Assert.Equal(234, duration);
        }
    }
}
